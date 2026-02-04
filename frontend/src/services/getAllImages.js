const getAllImages = async () => {
   const options = {
      method: "GET",
      credentials: "include",
   };

   const endpoint = `${import.meta.env.VITE_API_URL}/images`;
   
   const data = await fetch(endpoint, options);

   return data.json();
};

export default getAllImages;
