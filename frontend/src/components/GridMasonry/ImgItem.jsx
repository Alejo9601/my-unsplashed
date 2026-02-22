import DeleteButton from "./DeleteButton";
import ImageTitle from "./ImageTitle";

const ImgItem = ({ image = {}, onDeleteBtnClick, onPreviewClick }) => {
   const handleDeleteBtn = () => {
      onDeleteBtnClick(image);
   };

   const handlePreviewClick = () => {
      if (onPreviewClick) {
         onPreviewClick(image);
      }
   };

   return (
      <div
         className="grid-masonry__item-container"
         onClick={handlePreviewClick}
         role="button"
         tabIndex={0}
         onKeyDown={(event) => {
            if (event.target !== event.currentTarget) return;
            if (event.key === "Enter" || event.key === " ") {
               event.preventDefault();
               handlePreviewClick();
            }
         }}
      >
         <img
            className="grid-masonry__image"
            src={image.url}
            alt={image.name || "Image"}
            loading="lazy"
         />
         <div className="grid-masonry__overlay">
            <DeleteButton onClickAction={handleDeleteBtn} btnText="delete" />
            <ImageTitle titleText={image.name} />
         </div>
      </div>
   );
};

export default ImgItem;
