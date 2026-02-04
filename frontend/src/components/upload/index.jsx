import DropArea from "./DropArea";
import UploadTop from "./UploadTop";
import UploadBottom from "./UploadBottom";
import { FlexCard } from "../../styles/styled/div";
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
      <FlexCard>
         <UploadTop />
         <DropArea handleSelectedFile={handleSelectedFile} />
         {/* <UploadBottom handleSelectedFile={handleSelectedFile} /> */}
      </FlexCard>
   );
};

export default Upload;
