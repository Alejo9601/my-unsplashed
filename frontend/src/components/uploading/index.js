import ProgressBar from "./ProgressBar";
import { UploadingCard } from "../../styles/styled/div";
import { UploadingStatusText } from "../../styles/styled/h1";

const Uploading = ({ show }) => {
   return (
      <>
         {show ? (
            <UploadingCard>
               <UploadingStatusText>Uploading...</UploadingStatusText>
               <ProgressBar />
            </UploadingCard>
         ) : null}
      </>
   );
};

export default Uploading;
