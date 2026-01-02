const storeImgBin = (imgToUpload) => {
   const formData = new FormData();
   formData.append("myFile", imgToUpload);
   const options = {
      method: "POST",
      body: formData,
   };
   return fetch(
      "https://image-uploader-backend-production-c454.up.railway.app/api/v1/images",
      options
   ).then((res) => res.json());
};

export default storeImgBin;
