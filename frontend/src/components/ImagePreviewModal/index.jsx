import { useEffect, useRef, useState } from "react";
import { OpacityContainer } from "../../styles/styled/div";
import preventAppScroll from "../../helpers/preventAppScroll";
import "../../styles/image-preview-modal.css";

const ImagePreviewModal = ({ image, onClose }) => {
   const [isClosing, setIsClosing] = useState(false);
   const closeTimeoutRef = useRef(null);

   const handleClose = () => {
      if (isClosing) return;

      setIsClosing(true);
      closeTimeoutRef.current = setTimeout(() => {
         onClose();
      }, 220);
   };

   useEffect(() => {
      preventAppScroll(true);

      const handleEscape = (event) => {
         if (event.key === "Escape") {
            handleClose();
         }
      };

      window.addEventListener("keydown", handleEscape);

      return () => {
         preventAppScroll(false);
         window.removeEventListener("keydown", handleEscape);
         if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
         }
      };
   }, [onClose]);

   if (!image) return null;

   return (
      <OpacityContainer
         className={`image-preview-backdrop ${
            isClosing ? "image-preview-backdrop--closing" : ""
         }`}
         onClick={handleClose}
      >
         <div
            className={`image-preview-modal ${
               isClosing ? "image-preview-modal--closing" : ""
            }`}
            onClick={(event) => event.stopPropagation()}
         >
            <button
               type="button"
               className="image-preview-modal__close"
               onClick={handleClose}
            >
               X
            </button>
            <img src={image.url} alt={image.name || "Preview image"} />
            <p>{image.name}</p>
         </div>
      </OpacityContainer>
   );
};

export default ImagePreviewModal;
