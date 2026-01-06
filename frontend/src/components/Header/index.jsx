import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UploadBtn from "./UploadBtn";
import "../../styles/header.css";
import Login from "./Login";
import useUser from "../../hooks/useUser";

const Header = ({ handleClickUpload }) => {
   const isLogged = useUser();

   return (
      <header className="header">
         <Logo></Logo>
         <SearchBar></SearchBar>
         {isLogged ? (
            <UploadBtn handleUpload={handleClickUpload} />
         ) : (
            <Login></Login>
         )}
      </header>
   );
};

export default Header;
