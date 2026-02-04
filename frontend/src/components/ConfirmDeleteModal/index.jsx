import useImages from "../../hooks/useImages";
import Modal from "../Generics/Modal";
import { OpacityContainer } from "../../styles/styled/div";
import { useState } from "react";
import ProgressBar from "../Generics/ProgressBar";

const ConfirmDeleteModal = ({ image, onClose }) => {
   const { deleteImg } = useImages();
   const [deleting, setDeleting] = useState(false);

   const handleOnConfirmDelete = async () => {
      try {
         setDeleting(true);
         await deleteImg(image.id);
         setDeleting(false);
      } catch (error) {
         console.log(error.message);
      } finally {
         onClose();
      }
   };

   return (
      <OpacityContainer>
         {deleting ? (
            <ProgressBar statusMessage="Deleting..."></ProgressBar>
         ) : (
            <Modal
               btnActionText="Delete"
               handleAction={handleOnConfirmDelete}
               handleCancel={onClose}
            ></Modal>
         )}
      </OpacityContainer>
   );
};

export default ConfirmDeleteModal;
