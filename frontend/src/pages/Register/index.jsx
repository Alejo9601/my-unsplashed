import { useState } from "react";
import logo from "../../assets/camera.png";
import registerImg from "../../assets/registerimg.webp";
import useUser from "../../hooks/useUser";
import Loader from "../../components/Generics/Loader";
import { useNavigate } from "react-router-dom";
import "../../styles/auth.css";

const Register = () => {
   const [showSpinner, setShowSpinner] = useState(false);
   const { register } = useUser();

   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   const navigate = useNavigate();

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
            <>
               <aside className="register-fixed-panel" aria-hidden="true">
                  <img
                     className="register-panel__image"
                     src={registerImg}
                     alt="My Unsplashed preview"
                  />
                  <div className="register-panel__overlay"></div>
                  <div className="register-panel__content">
                     <h2>Capture and organize ideas visually</h2>
                     <p>
                        Build your own inspiration library and keep your best
                        shots one click away.
                     </p>
                  </div>
               </aside>

               <div className="register-form-shell">
                  <div className="auth-card register-card">
                  <div className="auth-card__header">
                     <img src={logo} alt="unsplashed logo" />
                     <h1>Create account</h1>
                     <span>Start saving your photos in one place</span>
                  </div>
                  <form
                     className="auth-card__form"
                     onSubmit={(e) => handleRegister(e)}
                  >
                     <label className="auth-field">
                        Username
                        <input
                           className="auth-input"
                           type="text"
                           name="username"
                           placeholder="Choose a username"
                           onChange={(e) => {
                              handleUsernameChange(e);
                           }}
                        />
                     </label>
                     <label className="auth-field">
                        Password
                        <input
                           className="auth-input"
                           type="password"
                           name="userpass"
                           placeholder="Choose a password"
                           onChange={(e) => {
                              handlePasswordChange(e);
                           }}
                        />
                     </label>
                     <input
                        className="auth-btn"
                        type="submit"
                        name="authBtn"
                        value="Register now"
                     />
                  </form>
                  <p className="auth-card__footer">
                     Already have an account?{" "}
                     <span
                        className="auth-link"
                        onClick={() => navigate("/login")}
                     >
                        Login here
                     </span>
                  </p>
               </div>
               </div>
            </>
         )}
      </div>
   );
};

export default Register;
