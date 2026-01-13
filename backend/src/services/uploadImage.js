const { UTApi } = require("uploadthing/server");
const utapi = new UTApi({ apiKey: process.env.UPLOADTHING_SECRET });
const { supabase } = require("../database/supabase");

async function uploadImage(file, userId) {
   const image_uploaded = await utapi.uploadFiles(file);

   if (!image_uploaded) {
      throw new Error("Error uploading image on cloud service");
   }

   const { data: image_data, error } = await supabase
      .from("images")
      .insert({
         user_id: userId,
         name: image_uploaded.data.name,
         url: image_uploaded.data.url,
      })
      .select()
      .single();

   if (error) {
      throw new Error("Error storing url on DB" + error.message);
   }

   return image_data;
}

module.exports = uploadImage;
