const getAllImages = async () => {
   const options = {
      method: "GET",
      credentials: "include",
      cache: "no-store",
   };

   const endpoint = `${import.meta.env.VITE_API_URL}/images`;
   const data = await fetch(endpoint, options);

   if (!data.ok) {
      throw new Error("Error getting all images");
   }

   return data.json();
};

export default getAllImages;
