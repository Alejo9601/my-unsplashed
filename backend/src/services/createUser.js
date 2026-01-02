const User = require("../models/user");
const { areEmptyFields } = require("../utils/areEmptyFields");

const createUser = async (username, password) => {
  const newUser = new User({
    username: username,
    password: password,
  });

  return areEmptyFields(username, password)
    ? { error: "Fields should not be empty" }
    : newUser.save();
};

module.exports = { createUser };
