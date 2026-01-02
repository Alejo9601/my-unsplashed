import FileStatusContext from "../../context/FileStatusContext";
import { useContext, useEffect } from "react";
import Upload from "../upload";
import Uploading from "../uploading";
import { OpacityContainer } from "../../styles/styled/div";
import { Button as CancelButton } from "../../components/Generics/Button";
import preventAppScroll from "../../helpers/preventAppScroll";

function UploadImageModal({ setShow }) {
   const { uploading, uploadedImg, resetFileStatusContext } =
      useContext(FileStatusContext);

   useEffect(() => {
      preventAppScroll(true);
      return () => {
         preventAppScroll(false);
      };
   }, []);

   return (
      <>
         <OpacityContainer>
            <CancelButton
               btnText="X"
               handleClick={() => {
                  setShow(false);
               }}
            />
            <Upload show={uploading ? false : true} />
            <Uploading show={uploading ? true : false} />
         </OpacityContainer>
      </>
   );
}

export default UploadImageModal;
