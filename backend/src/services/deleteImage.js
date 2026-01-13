const { supabase } = require("../database/supabase");

async function deleteImage(imageId) {
   const { data, error } = await supabase
      .from("images")
      .delete()
      .eq("id", imageId)
      .select();

   if (error) {
      throw new Error(error.message);
   }
   return data;
}

module.exports = deleteImage;
