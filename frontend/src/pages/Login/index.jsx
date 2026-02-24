import "../../styles/auth.css";
import logo from "../../assets/camera.png";
import Loader from "../../components/Generics/Loader";
import { useState } from "react";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";

const Login = () => {
   const { login } = useUser();
   const navigate = useNavigate();

   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [showSpinner, setShowSpinner] = useState(false);

   const handleLogin = async (event) => {
      event.preventDefault();
      setShowSpinner(true);

      try {
         const logged = await login(username, password);

         if (!logged) {
            throw new Error("Invalid credentials");
         }

         navigate("/home");
      } catch (error) {
         console.log(error.message);
      } finally {
         setShowSpinner(false);
      }
   };

   return (
      <div className="auth-container">
         {showSpinner ? (
            <Loader />
         ) : (
            <div className="auth-card">
               <div className="auth-card__header">
                  <img src={logo} alt="unsplashed logo" />
                  <h1>Welcome back</h1>
                  <span>Login to manage your photos</span>
               </div>

               <form className="auth-card__form" onSubmit={handleLogin}>
                  <label className="auth-field">
                     Username
                     <input
                        className="auth-input"
                        type="text"
                        name="username"
                        onChange={(event) => setUsername(event.target.value)}
                        placeholder="Type your username"
                     />
                  </label>

                  <label className="auth-field">
                     Password
                     <input
                        className="auth-input"
                        type="password"
                        name="userpass"
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Type your password"
                     />
                  </label>

                  <input
                     className="auth-btn"
                     type="submit"
                     name="authBtn"
                     value="Login"
                  />
               </form>

               <p className="auth-card__footer">
                  Do not have an account yet?{" "}
                  <span
                     className="auth-link"
                     onClick={() => navigate("/register")}
                  >
                     Register now
                  </span>
               </p>
            </div>
         )}
      </div>
   );
};

export default Login;
