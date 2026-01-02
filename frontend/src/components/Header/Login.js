import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="header-auth-options">
      <Link to="/login">Login</Link>
      <span>{"  /  "}</span>
      <Link to="">Sign in</Link>
    </div>
  );
};

export default Login;
