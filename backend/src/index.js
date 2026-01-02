const express = require("express");
const cors = require("cors");
const v1Router = require("./routes/v1");
require("dotenv").config();
require("./database").connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1", v1Router.imagesRoutes);
app.use("/api/v1/user", v1Router.userRoutes);
app.use("/api/v1/login", v1Router.loginRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("Server is running on PORT: " + PORT);
});
