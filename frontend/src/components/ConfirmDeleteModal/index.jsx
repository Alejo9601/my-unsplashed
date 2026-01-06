import { useContext } from "react";
import ImageToDeleteContext from "../../context/ImageToDeleteContext";
import useImages from "../../hooks/useImages";
import Modal from "../Generics/Modal";
import { OpacityContainer } from "../../styles/styled/div";

const ConfirmDeleteModal = ({ showModal }) => {
   const { imgId, setImgId } = useContext(ImageToDeleteContext);
   const { deleteImg } = useImages();

   const handleOnConfirmDelete = () => {
      deleteImg(imgId).then(showModal(false));
   };

   return (
      <OpacityContainer>
         <Modal
            btnActionText="Delete"
            handleAction={handleOnConfirmDelete}
            handleCancel={() => {
               showModal(false);
               setImgId(null);
            }}
         ></Modal>
      </OpacityContainer>
   );
};

export default ConfirmDeleteModal;
