import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../assets/css/Form.css";
import logo from "../assets/img/logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const toggleVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent page reload

    setTimeout(() => {
      navigate("/home"); // Redirect after 8 seconds
    }, 10);
  };

  return (
    <div className="container">
      <div className="login-form">
        <form onSubmit={handleLogin}>
          <img src={logo} alt="logo" />
          <h1>Hi, Welcome</h1>
          <p>Please sign-in to start your experience</p>

          <div className="input-wrapper">
            <input type="email" placeholder="Email" />
          </div>

          <div className="input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              className="eye-icon"
              onClick={toggleVisibility}
            />
          </div>

          <button type="submit">LOGIN</button>

          <p className="myp">
            Don't have an account?
            <Link className="link" to="/">
            Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
