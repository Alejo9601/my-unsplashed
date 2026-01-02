const { createContext, useState } = require("react");

const UserContext = createContext();

const UserProvider = ({ children }) => {
   const [user, setUser] = useState({ name: "Alejandro", logged: true });
   return (
      <UserContext.Provider value={{ user, setUser }}>
         {children}
      </UserContext.Provider>
   );
};

export { UserProvider };
export default UserContext;
