import useImages from "../../hooks/useImages";
import Modal from "../Generics/Modal";
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
      <>
         {" "}
         {deleting ? (
            <ProgressBar statusMessage="Deleting..."></ProgressBar>
         ) : (
            <Modal
               handleAction={handleOnConfirmDelete}
               action="Delete"
               handleCancel={onClose}
               confirmButtonVariant="danger"
            ></Modal>
         )}
      </>
   );
};

export default ConfirmDeleteModal;
