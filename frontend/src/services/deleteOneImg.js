const deleteOneImg = (imgId) => {
   const options = {
      method: "DELETE",
   };
   return fetch(
      `https://web-production-fbb1.up.railway.app/api/v1/${imgId}`,
      options
   );
};

export default deleteOneImg;
