import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import "./styles/app.css";
import useUser from "./hooks/useUser.js";
import Register from "./pages/Register/index.jsx";
import Loader from "./components/Generics/Loader/index.jsx";

function AppRoutes() {
   const { user, loading } = useUser();

   if (loading) {
      return (
         <div className="loading-home-container">
            <Loader></Loader>
         </div>
      );
   }

   return (
      <Routes>
         <Route
            path="/"
            element={<Navigate to={user ? "/home" : "/register"} replace />}
         />
         <Route
            path="/home"
            element={user ? <Home /> : <Navigate to="/register" replace />}
         />
         <Route
            path="/login"
            element={user ? <Navigate to="/home" replace /> : <Register />}
         />
         <Route
            path="/register"
            element={user ? <Navigate to="/home" replace /> : <Register />}
         />
         <Route
            path="*"
            element={<Navigate to={user ? "/home" : "/register"} replace />}
         />
      </Routes>
   );
}

export default AppRoutes;
