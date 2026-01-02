import "../../styles/login.css";
import logo from "../../assets/favicon.ico";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-card__header">
          <img src={logo} alt="unsplashed logo" />
          <h1>Login</h1>
          <span>Welcome</span>
        </div>
        <form className="login-card__form">
          <label>
            User
            <input id="username" type="text" name="username" />
          </label>
          <label>
            Password
            <input id="userpass" type="password" name="userpass" />
          </label>
          <input id="login-btn" type="button" name="loginbtn" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
