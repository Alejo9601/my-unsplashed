import { useState } from "react";
import { OPCont } from "../../../styles/styled/div";

export function OpacityContainer({ children, onCloseAction }) {
   const [isClosing, setIsClosing] = useState(false);

   const handleClose = () => {
      setIsClosing(true);
      onCloseAction();
   };

   return (
      <OPCont
         className={`upload-modal-backdrop ${
            isClosing ? "upload-modal-backdrop--closing" : ""
         }`}
         onClick={handleClose}
      >
         {children}
      </OPCont>
   );
}

export default OpacityContainer;
