import "../../styles/grid-masonry.css";
import "../../styles/generics.css";
import useImages from "../../hooks/useImages";
import ImgList from "./ImgList";

const GridMasonry = ({ onDeleteBtnClick, onPreviewClick }) => {
   const { images, imagesBySearch } = useImages();

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
