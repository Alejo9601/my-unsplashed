import "../../../styles/modal.css";

const Modal = ({ children, handleCancel, action = "DELETE", handleAction }) => {
  return (
    <div className="modal">
      <h3>{action === "DELETE" ? "Are you sure?" : "Add an image"}</h3>
      <form className="modal__form">
        {children}
        <div className="modal__form-buttons">
          <input
            type="button"
            onClick={handleCancel}
            name="cancel"
            value="Cancel"
            id="cancel-btn"
          />
          <input
            type="button"
            name="action-btn"
            value={action === "DELETE" ? "Delete" : "Submit"}
            id={action === "DELETE" ? "delete-btn" : "submit-btn"}
            onClick={handleAction}
          />
        </div>
      </form>
    </div>
  );
};

export default Modal;
