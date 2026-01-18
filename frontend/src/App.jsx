import { BrowserRouter } from "react-router-dom";
import { ImagesProvider } from "./context/ImagesContext";
import { UserProvider } from "./context/UserContext";
import { StatusContextProvider } from "./context/FileStatusContext";
import "./styles/app.css";
import AppRoutes from "./AppRoutes";

function App() {
   return (
      <BrowserRouter>
         <StatusContextProvider>
            <UserProvider>
               <ImagesProvider>
                  <div className="App">
                     <AppRoutes />
                  </div>
               </ImagesProvider>
            </UserProvider>
         </StatusContextProvider>
      </BrowserRouter>
   );
}

export default App;
