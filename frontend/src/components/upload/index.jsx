import { useState } from "react";
import DropArea from "./DropArea";
import UploadTop from "./UploadTop";
import { isImageFile } from "../../helpers/isImageFile";

const Upload = ({ onSelectedImage }) => {
   const [tagName, setTagName] = useState("");

   const handleSelectedFile = (selectedImg) => {
      const normalizedTag = tagName.trim();

      if (!normalizedTag) {
         alert("Complete tag name first");
         return;
      }

      if (isImageFile(selectedImg)) {
         onSelectedImage(selectedImg, normalizedTag);
      } else {
         alert("Files should be PNG, JPG... JPEG");
      }
   };

   return (
      <div className="upload-card">
         <UploadTop />
         <form className="upload-tag-form" autoComplete="off">
            <label className="upload-tag-field" htmlFor="image-label">
               <span className="upload-tag-label">Image tag</span>
               <input
                  autoComplete="off"
                  type="text"
                  id="image-label"
                  className="upload-tag-input"
                  placeholder="Add a short title for this image"
                  value={tagName}
                  onChange={(event) => setTagName(event.target.value)}
               />
               <span className="upload-tag-hint">
                  This name will be shown in the gallery.
               </span>
            </label>
         </form>
         <DropArea handleSelectedFile={handleSelectedFile} />
      </div>
   );
};

export default Upload;
