import "../../styles/grid-masonry.css";
import "../../styles/generics.css";
import useImages from "../../hooks/useImages";
import ImgList from "./ImgList";
import Loader from "../Generics/Loader";
import noimages from "./../../assets/no-images.png";

const GridMasonry = ({ onDeleteBtnClick, onPreviewClick }) => {
   const { images, imagesBySearch, imagesLoading } = useImages();
   const displayedImages = imagesBySearch === null ? images : imagesBySearch;

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
         {displayedImages.length > 0 ? (
            <div className="grid-masonry">
               <ImgList
                  imgsArray={displayedImages}
                  onDeleteBtnClick={onDeleteBtnClick}
                  onPreviewClick={onPreviewClick}
               />
            </div>
         ) : (
            <div className="no-images-loaded">
               <img src={noimages} />
               <p>
                  {imagesBySearch === null
                     ? "No images uploaded yet"
                     : "No matches found"}
               </p>
            </div>
         )}
      </>
   );
};

export default GridMasonry;
