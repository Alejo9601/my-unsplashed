const { supabase } = require("../database/supabase");
const { areEmptyFields } = require("../utils/areEmptyFields");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const createUser = async (username, password) => {
   if (areEmptyFields(username, password)) {
      return { error: "Fields should not be empty" };
   }

   const hashedPassword = await bcrypt.hash(password, 10);

   const { data: user, error } = await supabase
      .from("users")
      .insert({ username: username, password: hashedPassword })
      .select()
      .single();

   if (error) {
      return { error: error.message };
   }

   const token = jwt.sign(
      { user_id: user.id, username: user.username },
      process.env.JWT_SECRET,
      {
         expiresIn: "1h",
      },
   );

   return { success: true, token };
};

module.exports = { createUser };
