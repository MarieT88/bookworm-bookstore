const express = require("express");
const app = express.Router();
const { Product } = require("../db");
const Review = require("../db/models/Review");

// (api/products)
app.get("/", async (req, res, next) => {
  try {
    res.send(await Product.findAll());
    // res.send(await Product.getReviews())
  } catch (ex) {
    next(ex);
  }
});


// (api/products/)
app.get('/reviews', async (req, res, next) => {
	try {
    res.send(await Review.findAll());
  } catch (ex) {
    next(ex);
  }
});

// (api/products/:id)
app.get("/:id", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.sendStatus(404);
    }
  } catch (ex) {
    next(ex);
  }
});

// (api/products)
app.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await Product.create(req.body));
  } catch (ex) {
    next(ex);
  }
});

// (api/products/:id)
app.put("/:id", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      res.send(await product.update(req.body));
    } else {
      res.sendStatus(404);
    }
  } catch (ex) {
    next(ex);
  }
});

// (api/products/:id)
app.delete("/:id", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      await product.destroy();
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (ex) {
    next(ex);
  }
});

// (api/products/:id)
app.get('/:id/reviews', async (req, res, next) => {
	try {
		const product = await Product.findByPk(req.params.id);
		if (product) {
			res.send(await product.getReviews());
		} else {
			res.sendStatus(404);
		}
	} catch (ex) {
		next(ex);
	}
}
);

// (api/products/:id)
app.post('/:id/reviews', async (req, res, next) => {
	try {
		const product = await Product.findByPk(req.params.id);
		if (product) {
			const review = await product.createReview(req.body);
			res.status(201).send(review);
		} else {
			res.sendStatus(404);
		}
	} catch (ex) {
		next(ex);
	}
}
);

module.exports = app;
