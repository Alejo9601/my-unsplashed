const { supabase } = require("../database/supabase");
const { areEmptyFields } = require("../utils/areEmptyFields");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const validateUser = async (username, password) => {
   if (areEmptyFields(username, password)) {
      return { error: "Fields should not be empty" };
   }

   const { data: user, error } = await supabase
      .from("users")
      .select("*")
      .eq("username", username)
      .single();

   if (error || !user) {
      return { error: "Invalid credentials" };
   }

   const isValid = await bcrypt.compare(password, user.password);

   if (!isValid) {
      return { error: "Invalid credentials" };
   }

   const token = jwt.sign(
      { user_id: user.id, username: user.username },
      process.env.JWT_SECRET,
      {
         expiresIn: "1h",
      }
   );

   return { token };
};

module.exports = { validateUser };
