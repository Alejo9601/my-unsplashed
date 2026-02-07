import "../../styles/login.css";
import logo from "../../assets/favicon.ico";
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

   const handleUsernameChange = (event) => {
      const inputText = event.target.value;
      setUsername(inputText);
   };

   const handlePasswordChange = (event) => {
      const inputText = event.target.value;
      setPassword(inputText);
   };

   const handleLogin = async (e) => {
      e.preventDefault();
      setShowSpinner(true);
      try {
         const logged = await login(username, password);

         if (!logged) {
            throw new Error("Invalid credentials");
         }

         setShowSpinner(false);
         navigate("/home");
      } catch (error) {
         console.log(error.message);
      } finally {
         setShowSpinner(false);
      }
   };

   const handleOnRegisterClick = () => {
      navigate("/register");
   };

   return (
      <div className="auth-container">
         {showSpinner ? (
            <Loader></Loader>
         ) : (
            <div className="auth-card">
               <div className="auth-card__header">
                  <img src={logo} alt="unsplashed logo" />
                  <h1>Login</h1>
                  <span>Welcome</span>
               </div>
               <form
                  className="auth-card__form"
                  onSubmit={(e) => handleLogin(e)}
               >
                  <label>
                     User
                     <input
                        id="username"
                        type="text"
                        name="username"
                        onChange={(e) => {
                           handleUsernameChange(e);
                        }}
                     />
                  </label>
                  <label>
                     Password
                     <input
                        id="userpass"
                        type="password"
                        name="userpass"
                        onChange={(e) => {
                           handlePasswordChange(e);
                        }}
                     />
                  </label>
                  <input
                     id="auth-btn"
                     type="submit"
                     name="authBtn"
                     value="Login"
                  />
               </form>
            </div>
         )}
         <p>
            Doesn´t have an account yet{" "}
            <span id="go-to-registration" onClick={handleOnRegisterClick}>
               register Now
            </span>
         </p>
      </div>
   );
};

export default Login;
