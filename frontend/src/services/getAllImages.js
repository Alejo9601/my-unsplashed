const getAllImages = () => {
   return fetch("https://web-production-fbb1.up.railway.app/api/v1").then(
      (res) => res.json()
   );
};

export default getAllImages;
