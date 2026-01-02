const storeImgInfo = (newImage) => {
   const options = {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(newImage),
   };
   return fetch(
      "https://web-production-fbb1.up.railway.app/api/v1",
      options
   ).then((res) => res.json());
};

export default storeImgInfo;
