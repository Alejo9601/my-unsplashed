import { useState } from "react";
import ConfirmDeleteModal from "../../components/ConfirmDeleteModal";
import GridMasonry from "../../components/GridMasonry";
import Header from "../../components/Header";
import UploadImageModal from "../../components/UploadImageModal";
import PopUp from "../../components/PopUp";
import scrollBottom from "../../helpers/scrollBottom";

const Home = () => {
   const [imageToDelete, setImageToDelete] = useState(null);
   const [showUploadModal, setShowUploadModal] = useState(false);
   const [showPopUp, setShowPopUp] = useState(false);

   return (
      <>
         <Header handleClickUpload={() => setShowUploadModal(true)} />

         {showUploadModal ? (
            <>
               <UploadImageModal onClose={() => setShowUploadModal(false)} />
            </>
         ) : null}

         <GridMasonry onDeleteBtnClick={setImageToDelete} />

         {imageToDelete ? (
            <ConfirmDeleteModal
               image={imageToDelete}
               onClose={() => setImageToDelete(null)}
            />
         ) : null}

         {showPopUp ? (
            <PopUp
               message="Uploaded Successfully"
               setShowState={setShowPopUp}
            ></PopUp>
         ) : null}
      </>
   );
};

export default Home;
