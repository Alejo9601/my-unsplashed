const getAllImages = async () => {
   const options = {
      method: "GET",
      credentials: "include",
   };

   const endpoint = "http://localhost:3001/api/v1/images";

   const data = await fetch(endpoint, options);

   return data.json();
};

export default getAllImages;
