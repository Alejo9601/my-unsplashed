import "../../styles/grid-masonry.css";
import "../../styles/generics.css";
import useImages from "../../hooks/useImages";
import ImgList from "./ImgList";
import Loader from "../Generics/Loader";
import noimages from "./../../assets/no-images.png";

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
      <>
         {images.length > 0 ? (
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
         ) : (
            <div className="no-images-loaded">
               <img src={noimages} />
               <p>No images uploeaded yet</p>
            </div>
         )}
      </>
   );
};

export default GridMasonry;
