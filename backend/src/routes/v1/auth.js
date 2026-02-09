const express = require("express");
const { validateUser } = require("../../services/validateUser");
const authMiddleware = require("../../middlewares/auth");
const { createUser } = require("../../services/createUser");
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
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            maxAge: 3600000,
         }).json({
            success: true,
            message: "Logged in",
            data: result,
         });
      } catch (error) {
         next(error);
      }
   })
   .post("/register", async (req, res, next) => {
      const { username, password } = req.body;

      try {
         const result = await createUser(username, password);

         if (!result.success) {
            throw new Error({
               success: false,
               message: "User couldn´t be created",
            });
         }

         res.cookie("token", result.token, {
            httpOnly: true, // siempre
            secure: true, // true solo en https
            sameSite: "strict", // mejor que strict en dev
            maxAge: 3600000,
         });

         console.log(res);

         res.send({ success: true, message: "Logged in", data: result });
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
