import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import Modal from "./../Generics/Modal";
import { useState } from "react";

const Logout = () => {
   const { logout } = useUser();
   const navigate = useNavigate();
   const [showConfirmationModal, setShowConfirmationModal] = useState(false);

   const handleLogout = async () => {
      await logout();
      navigate("/login");
   };

   return (
      <div className="header-logout">
         <button onClick={() => setShowConfirmationModal(true)}>Logout</button>
         {showConfirmationModal ? (
            <Modal
               handleAction={handleLogout}
               action="Logout"
               handleCancel={() => setShowConfirmationModal(false)}
               confirmButtonVariant="danger"
            />
         ) : null}
      </div>
   );
};

export default Logout;
