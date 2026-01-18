import { useEffect } from "react";
import { createContext, useState } from "react";
import getCurrentUser from "../services/getCurrentUser";

const UserContext = createContext();

const UserProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const restoreSession = async () => {
         try {
            const currentUser = await getCurrentUser();
            setUser(currentUser ?? null);
         } catch (err) {
            console.error("Error restoring session", err);
            setUser(null);
         } finally {
            setLoading(false);
         }
      };

      restoreSession();
   }, []);

   return (
      <UserContext.Provider value={{ user, setUser, loading }}>
         {children}
      </UserContext.Provider>
   );
};

export { UserProvider };
export default UserContext;
