import { useEffect, useState } from "react";
import Upload from "../upload";
import Uploading from "../uploading";
import { OpacityContainer } from "../../styles/styled/div";
import { Button as CancelButton } from "../Generics/Button";
import preventAppScroll from "../../helpers/preventAppScroll";
import useImages from "../../hooks/useImages";

function UploadImageModal({ onClose }) {
   const [uploading, setUploading] = useState(false);
   const { uploadImg, refreshImages } = useImages();

   useEffect(() => {
      preventAppScroll(true);
      return () => {
         preventAppScroll(false);
      };
   }, []);

   const handleUpload = async (imgFile) => {
      try {
         setUploading(true);
         const result = await uploadImg(imgFile);

         if (!result) alert("image could not be uploaded");

         refreshImages(result);
      } catch (error) {
      } finally {
         setUploading(false);
         onClose();
      }
   };

   return (
      <>
         <OpacityContainer>
            <CancelButton
               btnText="X"
               handleClick={() => {
                  onClose();
               }}
            />
            <Upload
               show={uploading ? false : true}
               onSelectedImage={handleUpload}
            />
            <Uploading show={uploading ? true : false} />
         </OpacityContainer>
      </>
   );
}

export default UploadImageModal;
