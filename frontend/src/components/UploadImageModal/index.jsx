import { useEffect, useRef, useState } from "react";
import Upload from "../upload";
import ProgressBar from "../Generics/ProgressBar";
import preventAppScroll from "../../helpers/preventAppScroll";
import useImages from "../../hooks/useImages";
import "../../styles/upload-modal.css";
import OpacityContainer from "../Generics/OpacityContainer";

function UploadImageModal({ onClose }) {
   const [uploading, setUploading] = useState(false);
   const [isClosing, setIsClosing] = useState(false);
   const closeTimeoutRef = useRef(null);
   const { uploadImg, refreshImages } = useImages();

   const handleClose = () => {
      if (isClosing) return;
      setIsClosing(true);
      closeTimeoutRef.current = setTimeout(() => {
         onClose();
      }, 220);
   };

   useEffect(() => {
      preventAppScroll(true);
      return () => {
         preventAppScroll(false);
         if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
         }
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
         handleClose();
      }
   };

   return (
      <OpacityContainer onCloseAction={handleClose}>
         <div
            className={`upload-modal-shell ${
               isClosing ? "upload-modal-shell--closing" : ""
            }`}
            onClick={(event) => event.stopPropagation()}
         >
            <button
               type="button"
               className="upload-modal-close"
               onClick={handleClose}
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
