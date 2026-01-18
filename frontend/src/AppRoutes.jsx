import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import Login from "./pages/Login/index.jsx";
import "./styles/app.css";
import useUser from "./hooks/useUser.js";

function AppRoutes() {
   const { user, loading } = useUser();

   if (loading) {
      return <h1> Cargando...</h1>;
   }

   return (
      <Routes>
         <Route path="/" element={user ? <Home /> : <Login />} />
         <Route path="/home" element={user ? <Home /> : <Login />} />
         <Route path="/login" element={user ? <Home /> : <Login />} />
      </Routes>
   );
}

export default AppRoutes;
