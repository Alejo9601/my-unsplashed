import { createContext, useContext, useEffect, useState } from "react";
import getAllImages from "../services/getAllImages";
import FileStatusContext from "./FileStatusContext";

const ImagesContext = createContext();

const ImagesProvider = ({ children }) => {
   const [images, setImages] = useState([]);
   const [imagesBySearch, setImagesBySearch] = useState([]);
   const { uploadedImg } = useContext(FileStatusContext);

   useEffect(() => {
      getAllImages().then((res) => {
         setImages(res);
      });
   }, [uploadedImg]);

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
