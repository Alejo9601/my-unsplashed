const { supabase } = require("../database/supabase");
const { areEmptyFields } = require("../utils/areEmptyFields");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const validateUser = async (username, password) => {
   const errorMessage = { ok: false, error: "Invalid Credentials" };
   
   const { data: user, error } = await supabase
      .from("users")
      .select("*")
      .eq("username", username)
      .single();

   if (error || !user) {
      return errorMessage;
   }

   const isValid = await bcrypt.compare(password, user.password);

   if (!isValid) {
      return errorMessage;
   }

   const token = jwt.sign(
      { user_id: user.id, username: user.username },
      process.env.JWT_SECRET,
      {
         expiresIn: "1h",
      },
   );

   return { ok: true, token };
};

module.exports = { validateUser };
