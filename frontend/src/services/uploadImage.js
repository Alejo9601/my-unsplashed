async function uploadImage(img) {
   const formData = new FormData();
   formData.append("image", img);
   const options = {
      method: "POST",
      body: formData,
      credentials: "include",
   };
   const endpoint = `${import.meta.env.VITE_API_URL}/images`;
   const res = await fetch(endpoint, options);

   if (!res) throw new Error("No se pudo subir la imagen");

   return res.json();
}

export default uploadImage;
