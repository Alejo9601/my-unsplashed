import { useRef, useState } from "react";
import BackgroundImage from "./BackgroundImage";

const DragContainer = ({ handleSelectedFile }) => {
   const inputRef = useRef();
   const [dragging, setDragging] = useState(false);

   const handleOnChange = (event) => {
      const file = event.target.files?.[0];
      if (!file) return;
      handleSelectedFile(file);
   };

   const handleDrop = (event) => {
      event.preventDefault();
      setDragging(false);

      const file = event.dataTransfer.files?.[0];
      if (!file) return;
      handleSelectedFile(file);
   };

   const handleDragOver = (event) => {
      event.preventDefault();
      setDragging(true);
   };

   const handleDragLeave = () => {
      setDragging(false);
   };

   return (
      <div
         className={`upload-dropzone ${dragging ? "upload-dropzone--active" : ""}`}
         onDrop={handleDrop}
         onDragOver={handleDragOver}
         onDragLeave={handleDragLeave}
      >
         <div className="upload-dropzone-content">
            <BackgroundImage />
            <p>Drag and drop your image here</p>
            <button
               type="button"
               className="upload-select-btn"
               onClick={() => inputRef.current?.click()}
            >
               Choose file
            </button>
         </div>
         <input
            ref={inputRef}
            className="upload-hidden-input"
            type="file"
            accept="image/png,image/jpg,image/jpeg"
            onChange={handleOnChange}
         />
      </div>
   );
};

export default DragContainer;
