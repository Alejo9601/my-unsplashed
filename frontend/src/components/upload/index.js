import DropArea from "./DropArea";
import UploadTop from "./UploadTop";
import UploadBottom from "./UploadBottom";
import { FlexCard } from "../../styles/styled/div";
import { useContext } from "react";
import useImages from "../../hooks/useImages";
import FileStatusContext from "../../context/FileStatusContext";
import { isImageFile } from "../../helpers/isImageFile";

const Upload = ({ show = true }) => {
   const { setUploading, tagName } = useContext(FileStatusContext);
   const { uploadImage } = useImages();

   const handleSelectedFile = (selectedImg) => {
      if (isImageFile(selectedImg) && tagName != null) {
         setUploading(true);
         uploadImage(tagName, selectedImg);
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
