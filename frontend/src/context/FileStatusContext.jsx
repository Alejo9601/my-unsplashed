import { createContext, useState } from "react";

const FileStatusContext = createContext();

export const StatusContextProvider = ({ children }) => {
   const [uploading, setUploading] = useState(false);
   const [uploadedImg, setUploadedImg] = useState(null);
   const [tagName, setTagName] = useState(null);
   const [imgUrl, setImgUrl] = useState(null);

   const resetFileStatusContext = () => {
      setUploading(false);
      setUploadedImg(null);
      setTagName(null);
      setImgUrl(null);
   };

   const data = {
      uploading,
      setUploading,
      uploadedImg,
      setUploadedImg,
      tagName,
      setTagName,
      imgUrl,
      setImgUrl,
      resetFileStatusContext,
   };

   return (
      <FileStatusContext.Provider value={data}>
         {children}
      </FileStatusContext.Provider>
   );
};

export default FileStatusContext;
