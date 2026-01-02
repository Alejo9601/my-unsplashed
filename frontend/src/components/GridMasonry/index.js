import "../../styles/grid-masonry.css";
import "../../styles/generics.css";
import useImages from "../../hooks/useImages";
import ImgList from "./ImgList";
import { useEffect } from "react";

const GridMasonry = ({ onDeleteBtnClick }) => {
   const { images, imagesBySearch } = useImages();

   useEffect(() => {}, [images]);

   return (
      <div className="grid-masonry">
         {imagesBySearch.length === 0 ? (
            <ImgList imgsArray={images} onDeleteBtnClick={onDeleteBtnClick} />
         ) : (
            <ImgList
               imgsArray={imagesBySearch}
               onDeleteBtnClick={onDeleteBtnClick}
            />
         )}
      </div>
   );
};

export default GridMasonry;
