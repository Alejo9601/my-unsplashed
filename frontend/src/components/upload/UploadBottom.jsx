import { useRef } from "react";
import { hidable_P as P } from "../../styles/styled/p";
import InputButton from "./InputButton";
import "../../styles/modal.css";
import { FlexColumnDiv } from "../../styles/styled/div";

const UploadBottom = ({ handleSelectedFile }) => {
   const imageLabelRef = useRef();

   const handleOnChange = () => {
      setTagName(imageLabelRef.current.value);
   };

   return (
      <FlexColumnDiv>
         <FlexColumnDiv>
            <P>Or</P>
            <InputButton handleSelectedFile={handleSelectedFile} />
         </FlexColumnDiv>
         <form className="modal__form" autoComplete="off">
            <label>
               <input
                  autoComplete="false"
                  ref={imageLabelRef}
                  type="text"
                  id="image-label"
                  placeholder="Name tag for image here ..."
                  onChange={handleOnChange}
               />
            </label>
         </form>
      </FlexColumnDiv>
   );
};

export default UploadBottom;
