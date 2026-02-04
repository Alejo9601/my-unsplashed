const deleteImage = (imgId) => {
   const options = {
      method: "DELETE",
      credentials: "include",
   };

   const endpoint = `${import.meta.env.VITE_API_URL}/images/`;

   return fetch(`${endpoint + imgId}`, options);
};

export default deleteImage;
