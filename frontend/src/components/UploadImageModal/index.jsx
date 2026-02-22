import { useEffect, useState } from "react";
import Upload from "../upload";
import ProgressBar from "../Generics/ProgressBar";
import { OpacityContainer } from "../../styles/styled/div";
import preventAppScroll from "../../helpers/preventAppScroll";
import useImages from "../../hooks/useImages";
import "../../styles/upload-modal.css";

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
      <OpacityContainer className="upload-modal-backdrop" onClick={onClose}>
         <div
            className="upload-modal-shell"
            onClick={(event) => event.stopPropagation()}
         >
            <button
               type="button"
               className="upload-modal-close"
               onClick={onClose}
               aria-label="Close upload modal"
            >
               x
            </button>

            {uploading ? (
               <div className="upload-modal-progress">
                  <ProgressBar statusMessage="Uploading ..." />
               </div>
            ) : (
               <Upload onSelectedImage={handleUpload} />
            )}
         </div>
      </OpacityContainer>
   );
}

export default UploadImageModal;
