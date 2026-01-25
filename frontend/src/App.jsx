import { BrowserRouter } from "react-router-dom";
import { ImagesProvider } from "./context/ImagesContext";
import { UserProvider } from "./context/UserContext";
import "./styles/app.css";
import AppRoutes from "./AppRoutes";

function App() {
   return (
      <BrowserRouter>
         <UserProvider>
            <ImagesProvider>
               <div className="App">
                  <AppRoutes />
               </div>
            </ImagesProvider>
         </UserProvider>
      </BrowserRouter>
   );
}

export default App;
