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

      const fetchImages = async () => {
         try {
            const images = await getAllImages();
            setImages(images);
         } catch (error) {
            console.error("❌ Error al obtener imágenes:", error);
            setImages([]);
         }
      };

      fetchImages();
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
