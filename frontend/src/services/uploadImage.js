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

   if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.error || `Error del servidor: ${res.status}`);
   }

   return res.json();
}

export default uploadImage;
