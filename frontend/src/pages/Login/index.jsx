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
            alert("Invalid Credentials");
            return;
         }

         setShowSpinner(false);
         navigate("/home");
      } catch {
         alert("Somenthing went wrong!");
      }
   };

   return (
      <div className="login-container">
         {showSpinner ? (
            <Loader></Loader>
         ) : (
            <div className="login-card">
               <div className="login-card__header">
                  <img src={logo} alt="unsplashed logo" />
                  <h1>Login</h1>
                  <span>Welcome</span>
               </div>
               <form
                  className="login-card__form"
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
                     id="login-btn"
                     type="submit"
                     name="loginbtn"
                     value="Login"
                  />
               </form>
            </div>
         )}
      </div>
   );
};

export default Login;
