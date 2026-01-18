import "../../styles/login.css";
import logo from "../../assets/favicon.ico";
import { useState } from "react";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";

const Login = () => {
   const { login } = useUser();
   const navigate = useNavigate();

   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   const handleUsernameChange = (event) => {
      const inputText = event.target.value;
      setUsername(inputText);
   };

   const handlePasswordChange = (event) => {
      const inputText = event.target.value;
      setPassword(inputText);
   };

   const handleLogin = (e) => {
      e.preventDefault();
      const logged = login(username, password);
      if (!logged) {
         alert("Invalid Credentials");
         return;
      }
      navigate("/home");
   };

   return (
      <div className="login-container">
         <div className="login-card">
            <div className="login-card__header">
               <img src={logo} alt="unsplashed logo" />
               <h1>Login</h1>
               <span>Welcome</span>
            </div>
            <form className="login-card__form" onSubmit={(e) => handleLogin(e)}>
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
      </div>
   );
};

export default Login;
