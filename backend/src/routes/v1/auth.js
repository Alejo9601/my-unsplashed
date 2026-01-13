const express = require("express");
const { validateUser } = require("../../services/validateUser");
const auth = express.Router();

auth.post("/login", async (req, res, next) => {
   const user = req.body;

   try {
      const result = await validateUser(user.username, user.password);

      if (!result) {
         res.status(401).json({ error: "Invalid credentials" });
      }

      res.cookie("token", result.token, {
         httpOnly: process.env.NODE_ENV === "production",
         secure: process.env.NODE_ENV === "production",
         sameSite: "strict",
         maxAge: 3600000, // 1 hora
      }).send(result);
   } catch (error) {
      next(error);
   }
});

module.exports = auth;
