import AnimatedBar from "./animatedBar";
import { UploadingCard } from "../../../styles/styled/div";
import { UploadingStatusText } from "../../../styles/styled/h1";

const ProgressBar = ({ statusMessage }) => {
   return (
      <UploadingCard>
         <UploadingStatusText>{statusMessage}</UploadingStatusText>
         <AnimatedBar />
      </UploadingCard>
   );
};

export default ProgressBar;
