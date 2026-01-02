import { useContext, useEffect, useRef } from "react";
import { DragArea, FlexColumnDiv } from "../../styles/styled/div";
import { StyledInput } from "../../styles/styled/input";
import { DragDescription as P } from "../../styles/styled/p";
import BackgroundImage from "./BackgroundImage";
import FileStatusContext from "../../context/FileStatusContext";

const DragContainer = ({ handleSelectedFile }) => {
   const { tagName } = useContext(FileStatusContext);
   const inputRef = useRef();
   const divRef = useRef();

   const handleOnChange = () => {
      if (tagName == null) {
         alert("Complete Tag name first");
         inputRef.current.value = ""; //Cleaning current stored files
         return;
      }

      handleSelectedFile(inputRef.current.files[0]);
   };

   useEffect(() => {
      inputRef.current.addEventListener("dragenter", () => {
         divRef.current.style.backgroundColor = "#EAF6F6";
      });
      inputRef.current.addEventListener("dragleave", () => {
         divRef.current.style.backgroundColor = "#e1e5ea80";
      });
   }, []);

   return (
      <DragArea ref={divRef}>
         <FlexColumnDiv>
            <BackgroundImage />
            <P>{`Drag & Drop your image here`}</P>
         </FlexColumnDiv>
         <StyledInput ref={inputRef} type="file" onChange={handleOnChange} />
      </DragArea>
   );
};

export default DragContainer;
