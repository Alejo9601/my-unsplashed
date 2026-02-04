const express = require("express");
const { validateUser } = require("../../services/validateUser");
const authMiddleware = require("../../middlewares/auth");
const auth = express.Router();

auth
   .post("/login", async (req, res, next) => {
      const user = req.body;

      try {
         const result = await validateUser(user.username, user.password);

         if (!result.ok) {
            res.status(401).json({ error: "Invalid credentials" });
         }

         res.cookie("token", result.token, {
            httpOnly: true, // siempre
            secure: false, // true solo en https
            sameSite: "lax", // mejor que strict en dev
            maxAge: 3600000,
         }).send(result);
      } catch (error) {
         next(error);
      }
   })
   .get("/me", authMiddleware, async (req, res, next) => {
      res.json(req.user);
   });

module.exports = auth;
