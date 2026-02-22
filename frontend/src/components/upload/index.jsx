import DropArea from "./DropArea";
import UploadTop from "./UploadTop";
import { isImageFile } from "../../helpers/isImageFile";

const Upload = ({ onSelectedImage }) => {
   const handleSelectedFile = (selectedImg) => {
      if (isImageFile(selectedImg)) {
         onSelectedImage(selectedImg);
      } else {
         alert("Files should be PNG, JPG... JPEG");
      }
   };

   return (
      <div className="upload-card">
         <UploadTop />
         <DropArea handleSelectedFile={handleSelectedFile} />
      </div>
   );
};

export default Upload;
