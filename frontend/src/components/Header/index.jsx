import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UploadBtn from "./UploadBtn";
import "../../styles/header.css";
import useUser from "../../hooks/useUser";
import Logout from "./Logout";

const Header = ({ handleClickUpload }) => {
   const { user } = useUser();

   return (
      <header className="header">
         <Logo></Logo>
         <SearchBar></SearchBar>
         {/* <span>Welcome {user.username}</span> */}
         <div className="header_logout-upload-container">
            <Logout></Logout>
            <UploadBtn handleUpload={handleClickUpload} />
         </div>
      </header>
   );
};

export default Header;
