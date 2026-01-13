const express = require("express");
const cors = require("cors");
const v1Router = require("./routes/v1");
const cookieParser = require("cookie-parser");
const authMiddleware = require("./middlewares/auth");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/v1/auth", v1Router.loginRoutes);
app.use("/api/v1/user", v1Router.userRoutes);
app.use("/api/v1/images", authMiddleware, v1Router.imagesRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
   console.log("Server is running on PORT: " + PORT);
});
