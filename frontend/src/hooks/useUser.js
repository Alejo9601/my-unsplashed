import { useContext } from "react";
import UserContext from "../context/UserContext";
import { userLogin } from "../services/userLogin";

const useUser = () => {
   const { user, setUser, loading } = useContext(UserContext);

   const login = async (username, password) => {
      const res = await userLogin(username, password);

      if (!res) return false;

      setUser(res);
      return true;
   };

   return { login, user, loading };
};

export default useUser;
