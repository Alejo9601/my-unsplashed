const { supabase } = require("../database/supabase");

async function getImages(userId) {
   const { data: userImages, error } = await supabase
      .from("images")
      .select("*")
      .eq("user_id", userId);

   if (error) {
      throw new Error("Error getting images for user " + error.message);
   }

   return userImages;
}

module.exports = getImages;
