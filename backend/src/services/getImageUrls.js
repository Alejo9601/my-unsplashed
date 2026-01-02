const Image = require("../models/image");

const getImageUrls = () => {
  return Image.find();
};

module.exports = { getImageUrls };
