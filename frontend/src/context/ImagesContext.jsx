import { createContext, useEffect, useState } from "react";
import getAllImages from "../services/getAllImages";
import useUser from "../hooks/useUser";

const ImagesContext = createContext();

const ImagesProvider = ({ children }) => {
   const [images, setImages] = useState([]);
   const [imagesBySearch, setImagesBySearch] = useState([]);
   const { user, loading } = useUser();

   useEffect(() => {
      if (loading) return;
      if (!user) {
         setImages([]);
         return;
      }

      getAllImages()
         .then(setImages)
         .catch(() => setImages([]));
   }, [user, loading]);

   return (
      <ImagesContext.Provider
         value={{ images, setImages, imagesBySearch, setImagesBySearch }}
      >
         {children}
      </ImagesContext.Provider>
   );
};

export { ImagesProvider };
export default ImagesContext;
