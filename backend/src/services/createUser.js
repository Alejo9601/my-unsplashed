const { supabase } = require("../database/supabase");
const { areEmptyFields } = require("../utils/areEmptyFields");
const bcrypt = require("bcrypt");

const createUser = async (username, password) => {
   if (areEmptyFields(username, password)) {
      return { error: "Fields should not be empty" };
   }

   const hashedPassword = await bcrypt.hash(password, 10);

   const { data, error } = await supabase
      .from("users")
      .insert({ username: username, password: hashedPassword })
      .select()
      .single();

   if (error) {
      return { error: error.message };
   }

   return data;
};

module.exports = { createUser };
