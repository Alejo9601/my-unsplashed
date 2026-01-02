const User = require("../models/user");
const { areEmptyFields } = require("../utils/areEmptyFields");

const validateUser = async (username, password) => {
  return areEmptyFields(username, password)
    ? { error: "Fields should not be empty" }
    : User.findOne({ username: username, password: password });
};

module.exports = { validateUser };
