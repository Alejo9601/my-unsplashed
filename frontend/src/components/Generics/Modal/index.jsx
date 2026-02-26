import "../../../styles/modal.css";
import OpacityContainer from "./../OpacityContainer";

const Modal = ({
   children,
   handleCancel,
   action,
   handleAction,
   confirmButtonVariant = "primary",
}) => {
   const variants = {
      primary: "submit-btn",
      secondary: "secondary-btn",
      danger: "delete-btn",
   };

   return (
      <OpacityContainer onCloseAction={handleCancel}>
         {" "}
         <div className="modal">
            <h3>Are you sure?</h3>
            <form className="modal__form">
               {children}

               <div className="modal__form-buttons">
                  <input
                     type="button"
                     onClick={handleCancel}
                     value="Cancel"
                     id="cancel-btn"
                  />

                  <input
                     type="button"
                     value={action}
                     onClick={handleAction}
                     id={variants[confirmButtonVariant]}
                  />
               </div>
            </form>
         </div>
      </OpacityContainer>
   );
};

export default Modal;
