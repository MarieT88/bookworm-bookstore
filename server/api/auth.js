const express = require("express");
const app = express.Router();
const { User } = require("../db");

module.exports = app;

app.post("/", async (req, res, next) => {
  try {
    res.send(await User.authenticate(req.body));
  } catch (ex) {
    next(ex);
  }
});

app.get("/", async (req, res, next) => {
  try {
    res.send(await User.findByToken(req.headers.authorization));
  } catch (ex) {
    next(ex);
  }
});

app.get("/addresses", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    res.send(await user.getAddresses());
  } catch (ex) {
    next(ex);
  }
});

app.post("/addresses", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    res.send(await user.createAddress(req.body));
  } catch (ex) {
    next(ex);
  }
});

app.get("/:token", async (req, res, next) => {
  try {
    res.send(await User.findByToken(req.params.token));
  } catch (ex) {
    next(ex);
  }
});

// creates and authenticates user
app.post("/register", async (req, res, next) => {
  try {
    res.send(await User.register(req.body));
  } catch (ex) {
    next(ex);
  }
});

// updates user
app.put("/:token", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.params.token);
    await user.update(req.body);
    res.send(user);
  } catch (ex) {
    next(ex);
  }
});
