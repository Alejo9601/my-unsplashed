const express = require("express");
const { createUser } = require("../../services/createUser");
const { validateUser } = require("../../services/validateUser");
const userRoutes = express.Router();

userRoutes.post("/", (req, res, next) => {
  const user = req.body;
  createUser(user.username, user.password).then((result) =>
    res.send(result).end()
  );
});

module.exports = userRoutes;
