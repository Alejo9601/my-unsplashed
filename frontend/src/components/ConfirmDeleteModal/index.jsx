import useImages from "../../hooks/useImages";
import Modal from "../Generics/Modal";
import { OpacityContainer } from "../../styles/styled/div";

const ConfirmDeleteModal = ({ image, onClose }) => {
   const { deleteImg } = useImages();

   const handleOnConfirmDelete = async () => {
      try {
         deleteImg(image.id);
      } catch (error) {
      } finally {
         onClose();
      }
   };

   return (
      <OpacityContainer>
         <Modal
            btnActionText="Delete"
            handleAction={handleOnConfirmDelete}
            handleCancel={onClose}
         ></Modal>
      </OpacityContainer>
   );
};

export default ConfirmDeleteModal;
