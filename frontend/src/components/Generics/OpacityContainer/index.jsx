import { useEffect, useState } from "react";
import { OPCont } from "../../../styles/styled/div";
import preventAppScroll from "./../../../helpers/preventAppScroll";

export function OpacityContainer({ children, onCloseAction, canClose = true }) {
   const [isClosing, setIsClosing] = useState(false);

   useEffect(() => {
      preventAppScroll(true);

      return () => {
         preventAppScroll(false);
      };
   }, []);

   const handleClose = () => {
      if (!canClose || isClosing) return;
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
