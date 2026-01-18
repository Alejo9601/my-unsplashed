const deleteImage = (imgId) => {
   const options = {
      method: "DELETE",
      credentials: "include",
   };
   const endpoint = "http://localhost:3001/api/v1/images/";
   return fetch(`${endpoint + imgId}`, options);
};

export default deleteImage;
