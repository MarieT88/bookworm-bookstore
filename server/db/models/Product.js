const conn = require("../conn");
const { STRING, UUID, UUIDV4, ENUM, DATEONLY, TEXT, DECIMAL, INTEGER } = conn.Sequelize;
// Products = Books
const Product = conn.define("product", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  title: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  author: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  publishedDate: {
    type: DATEONLY,
    allowNull: false,
  },
  genre: {
    type: ENUM("Fiction", "Nonfiction"),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: TEXT,
    allowNull: true,
  },
  price: {
    type: DECIMAL(8, 2),
    validate: {
      min: 0.0,
    },
  },
  imageUrl: {
    type: STRING,
    defaultValue: "https://www.bookdeal.com/images/no-image.png",
  },
  avgRating: {
    type: INTEGER,
  }
});

Product.prototype.getReviews = async function () {
  let reviews = await conn.models.review.findAll({
    where: {
      productId: this.id,
    },
  });
  return reviews;
}; 


module.exports = Product;
