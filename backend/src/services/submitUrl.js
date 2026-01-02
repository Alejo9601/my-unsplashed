const Image = require("../models/image");

const submitUrl = (name, url) => {
  const image = new Image({
    name: name,
    url: url,
  });
  return image.save();
};

module.exports = { submitUrl };
