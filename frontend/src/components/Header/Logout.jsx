import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";

const Logout = () => {
   const { logout } = useUser();
   const navigate = useNavigate();

   const handleLogout = async () => {
      await logout();
      navigate("/login");
   };

   return (
      <div className="header-logout">
         <button onClick={handleLogout}>Logout</button>
      </div>
   );
};

export default Logout;
