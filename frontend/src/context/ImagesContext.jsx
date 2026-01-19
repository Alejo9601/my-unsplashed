import { createContext, useContext, useEffect, useState } from "react";
import getAllImages from "../services/getAllImages";
import FileStatusContext from "./FileStatusContext";
import useUser from "../hooks/useUser";

const ImagesContext = createContext();

const ImagesProvider = ({ children }) => {
   const [images, setImages] = useState([]);
   const [imagesBySearch, setImagesBySearch] = useState([]);
   const { uploadedImg } = useContext(FileStatusContext);
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
   }, [user, loading, uploadedImg]);

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
