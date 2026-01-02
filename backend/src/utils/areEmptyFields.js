const areEmptyFields = (username, password) => {
  return username === "" || password === "";
};

module.exports = { areEmptyFields };
