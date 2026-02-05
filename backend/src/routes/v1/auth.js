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
            res.status(401).json({
               success: false,
               message: "Invalid credentials",
            });
         }

         res.cookie("token", result.token, {
            httpOnly: true, // siempre
            secure: true, // true solo en https
            sameSite: "strict", // mejor que strict en dev
            maxAge: 3600000,
         }).send({ success: true, message: "Logged in", data: result });
      } catch (error) {
         next(error);
      }
   })
   .get("/me", authMiddleware, async (req, res, next) => {
      res.json(req.user);
   })
   .delete("/logout", authMiddleware, (req, res, next) => {
      res.clearCookie("token", {
         httpOnly: true,
         secure: true,
         sameSite: "strict",
      });
      res.status(200).json({ success: true, message: "Logged out" });
   });

module.exports = auth;
