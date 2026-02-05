import { useContext } from "react";
import UserContext from "../context/UserContext";
import { userLogin } from "../services/userLogin";
import userLogout from "../services/userLogout";

const useUser = () => {
   const { user, setUser, loading } = useContext(UserContext);

   const login = async (username, password) => {
      const res = await userLogin(username, password);

      if (!res) return false;

      setUser(res);
      return true;
   };

   const logout = async () => {
      await userLogout(user);
      setUser(null);
   };

   return { login, user, loading, logout };
};

export default useUser;
