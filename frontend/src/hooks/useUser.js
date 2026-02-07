import { useContext } from "react";
import UserContext from "../context/UserContext";
import { userLogin } from "../services/userLogin";
import userLogout from "../services/userLogout";
import { userRegistration } from "../services/userRegistration";

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

   const register = async (username, password) => {
      const res = await userRegistration(username, password);

      if (!res) {
         alert("User not created");
      }

      console.log(res);

      setUser(res);
   };

   return { login, user, loading, logout, register };
};

export default useUser;
