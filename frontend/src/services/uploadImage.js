function uploadImage(imgToUpload) {
   const formData = new FormData();
   formData.append("image", imgToUpload);
   const options = {
      method: "POST",
      body: formData,
      credentials: "include",
   };
   const endpoint = "http://localhost:3001/api/v1/images";
   return fetch(endpoint, options).then((res) => res.json());
}

export default uploadImage;
