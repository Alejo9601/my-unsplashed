require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      console.log("connected");
    }
  );
};

module.exports = { connectDB };
