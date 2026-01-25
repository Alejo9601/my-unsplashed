import { useRef, useState } from "react";
import DeleteButton from "./DeleteButton";
import ImageTitle from "./ImageTitle";

const ImgItem = ({ image = {}, onDeleteBtnClick }) => {
   const imgRef = useRef();
   const [showOverlay, setShowOverlay] = useState(false);

   const handleDeleteBtn = () => {
      onDeleteBtnClick(image);
   };

   const handleMouseEnter = () => {
      imgRef.current.style.filter = "brightness(50%)";
      setShowOverlay(true);
   };

   const handleMouseLeave = () => {
      imgRef.current.style.filter = "brightness(100%)";
      setShowOverlay(false);
   };

   return (
      <div
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
         className="grid-masonry__item-container"
      >
         {showOverlay ? (
            <>
               <DeleteButton onClickAction={handleDeleteBtn} btnText="delete" />
               <ImageTitle titleText={image.name} />
            </>
         ) : null}
         <img ref={imgRef} src={image.url} alt={image.name} loading="lazy" />
      </div>
   );
};

export default ImgItem;
