import { useEffect } from "react";
import { OpacityContainer } from "../../styles/styled/div";
import preventAppScroll from "../../helpers/preventAppScroll";
import "../../styles/image-preview-modal.css";

const ImagePreviewModal = ({ image, onClose }) => {
   useEffect(() => {
      preventAppScroll(true);

      const handleEscape = (event) => {
         if (event.key === "Escape") {
            onClose();
         }
      };

      window.addEventListener("keydown", handleEscape);

      return () => {
         preventAppScroll(false);
         window.removeEventListener("keydown", handleEscape);
      };
   }, [onClose]);

   if (!image) return null;

   return (
      <OpacityContainer onClick={onClose}>
         <div
            className="image-preview-modal"
            onClick={(event) => event.stopPropagation()}
         >
            <button
               type="button"
               className="image-preview-modal__close"
               onClick={onClose}
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
