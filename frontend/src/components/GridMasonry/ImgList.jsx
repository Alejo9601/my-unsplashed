import ImgItem from "./ImgItem";

const ImgList = ({ imgsArray, onDeleteBtnClick, onPreviewClick }) => {
   return (
      <>
         {(imgsArray || []).map((image) => {
            return (
               <ImgItem
                  key={image.id}
                  image={image}
                  onDeleteBtnClick={onDeleteBtnClick}
                  onPreviewClick={onPreviewClick}
               />
            );
         })}
      </>
   );
};

export default ImgList;
