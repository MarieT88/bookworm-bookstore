const conn = require("../conn");
const { STRING, BOOLEAN, UUID, UUIDV4 } = conn.Sequelize;

const Order = conn.define("order", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  // if isCart false = order
  isCart: {
    type: BOOLEAN,
    defaultValue: true,
    allowNull: false,
  },
  userId: {
    type: UUID,
    allowNull: false,
  },
  // false = in-progress
  orderStatus: {
    type: BOOLEAN,
    defaultValue: false,
  },
});


module.exports = Order;
