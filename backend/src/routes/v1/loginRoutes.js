const express = require("express");
const { validateUser } = require("../../services/validateUser");
const loginRoutes = express.Router();

loginRoutes.post("/", (req, res, next) => {
  const user = req.body;
  validateUser(user.username, user.password).then((result) =>
    result ? res.send(result).end() : res.status(401).end()
  );
});

module.exports = loginRoutes;
