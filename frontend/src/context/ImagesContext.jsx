import { createContext, useEffect, useState } from "react";
import getAllImages from "../services/getAllImages";
import useUser from "../hooks/useUser";

const ImagesContext = createContext();

const ImagesProvider = ({ children }) => {
   const [images, setImages] = useState([]);
   const [imagesBySearch, setImagesBySearch] = useState([]);
   const [imagesLoading, setImagesLoading] = useState(true);
   const { user, loading } = useUser();

   useEffect(() => {
      if (loading) return;

      if (!user) {
         setImages([]);
         setImagesLoading(false);
         return;
      }

      const fetchImages = async () => {
         setImagesLoading(true);

         try {
            const responseImages = await getAllImages();
            setImages(responseImages);
         } catch (error) {
            console.error("Error getting images:", error);
            setImages([]);
         } finally {
            setImagesLoading(false);
         }
      };

      fetchImages();
   }, [user, loading]);

   return (
      <ImagesContext.Provider
         value={{
            images,
            setImages,
            imagesBySearch,
            setImagesBySearch,
            imagesLoading,
         }}
      >
         {children}
      </ImagesContext.Provider>
   );
};

export { ImagesProvider };
export default ImagesContext;
