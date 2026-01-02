import { createContext, useState } from "react";

const ImageToDeleteContext = createContext();

const ImageToDeleteProvider = ({ children }) => {
  const [imgId, setImgId] = useState(null);

  return (
    <ImageToDeleteContext.Provider value={{ imgId, setImgId }}>
      {children}
    </ImageToDeleteContext.Provider>
  );
};

export { ImageToDeleteProvider };
export default ImageToDeleteContext;
