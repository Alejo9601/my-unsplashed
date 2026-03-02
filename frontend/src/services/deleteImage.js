const deleteImage = async (imgId) => {
   const options = {
      method: "DELETE",
      credentials: "include",
   };

   const endpoint = `${import.meta.env.VITE_API_URL}/images/`;
   const response = await fetch(`${endpoint + imgId}`, options);

   if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Error del servidor: ${response.status}`);
   }

   return response;
};

export default deleteImage;
