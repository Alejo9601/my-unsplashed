import { useState } from "react";
import logo from "../../assets/favicon.ico";
import useUser from "../../hooks/useUser";
import Loader from "../../components/Generics/Loader";

const Register = () => {
   const [showSpinner, setShowSpinner] = useState(false);
   const { register } = useUser();

   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   const handleRegister = async (e) => {
      e.preventDefault();
      try {
         setShowSpinner(true);
         await register(username, password);
         setShowSpinner(false);
      } catch (error) {
         alert("user couldn´t be created");
      }
   };

   const handleUsernameChange = (e) => {
      const inputValue = e.target.value;
      setUsername(inputValue);
   };

   const handlePasswordChange = (e) => {
      const inputValue = e.target.value;
      setPassword(inputValue);
   };

   return (
      <div className="auth-container">
         {showSpinner ? (
            <Loader></Loader>
         ) : (
            <div className="auth-card">
               <div className="auth-card__header">
                  <img src={logo} alt="unsplashed logo" />
                  <h1>Register</h1>
                  <span>Welcome</span>
               </div>
               <form
                  className="auth-card__form"
                  onSubmit={(e) => handleRegister(e)}
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
                     value="Register now"
                  />
               </form>
            </div>
         )}
      </div>
   );
};

export default Register;
