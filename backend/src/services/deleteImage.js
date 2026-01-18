const { supabase } = require("../database/supabase");
const { UTApi } = require("uploadthing/server");
const utapi = new UTApi({ apikey: process.env.UPLOADTHING_SECRET });

async function deleteImage(imageId) {
   const { data, error } = await supabase
      .from("images")
      .select("file_key")
      .eq("id", imageId)
      .single();

   if (error) {
      throw new Error("IMAGE_NOT_FOUND");
   }

   await utapi.deleteFiles(data.file_key);

   const { error: deleteError } = await supabase
      .from("images")
      .delete()
      .eq("id", imageId);

   if (deleteError) {
      throw deleteError;
   }
}

module.exports = deleteImage;
