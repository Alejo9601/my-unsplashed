import "../../styles/grid-masonry.css";
import "../../styles/generics.css";
import useImages from "../../hooks/useImages";
import ImgList from "./ImgList";
import Loader from "../Generics/Loader";

const GridMasonry = ({ onDeleteBtnClick, onPreviewClick }) => {
   const { images, imagesBySearch, imagesLoading } = useImages();

   if (imagesLoading) {
      return (
         <div className="grid-masonry grid-masonry--loading">
            <Loader />
            <p>Loading images...</p>
         </div>
      );
   }

   return (
      <div className="grid-masonry">
         {imagesBySearch.length === 0 ? (
            <ImgList
               imgsArray={images}
               onDeleteBtnClick={onDeleteBtnClick}
               onPreviewClick={onPreviewClick}
            />
         ) : (
            <ImgList
               imgsArray={imagesBySearch}
               onDeleteBtnClick={onDeleteBtnClick}
               onPreviewClick={onPreviewClick}
            />
         )}
      </div>
   );
};

export default GridMasonry;
