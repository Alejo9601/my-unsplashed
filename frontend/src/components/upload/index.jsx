import DropArea from "./DropArea";
import UploadTop from "./UploadTop";
import UploadBottom from "./UploadBottom";
import { FlexCard } from "../../styles/styled/div";
import { isImageFile } from "../../helpers/isImageFile";

const Upload = ({ show = true, onSelectedImage }) => {
   const handleSelectedFile = (selectedImg) => {
      if (isImageFile(selectedImg)) {
         onSelectedImage(selectedImg);
      } else {
         alert("Files should be PNG, JPG... JPEG");
      }
   };

   return (
      <>
         {show ? (
            <FlexCard>
               <UploadTop />
               <DropArea handleSelectedFile={handleSelectedFile} />
               <UploadBottom handleSelectedFile={handleSelectedFile} />
            </FlexCard>
         ) : null}
      </>
   );
};

export default Upload;
