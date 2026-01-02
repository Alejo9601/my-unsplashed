const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  name: String,
  url: String,
});

module.exports = mongoose.model("Image", ImageSchema);
