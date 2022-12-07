import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { apiClient } from "../api";
import { GROUPS } from "../constants";

const userIcon = require("../styles/icons/user.png");
const passwordIcon = require("../styles/icons/password.png");

const Login = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const saveToken = (userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));
  };

  // Login submit on click
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { token, group } = await apiClient.loginUser({
      username: username,
      password: password,
    });
    saveToken(token);
    if (group === GROUPS.USER) navigate("/code");
    if (group === GROUPS.ADMIN) navigate("/lobby");
  };

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label className="icon">
            <img src={userIcon} />
          </label>
          <input
            className="form-input"
            placeholder="Username"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label className="icon">
            <img src={passwordIcon} />
          </label>
          <input
            className="form-input"
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="signin-btn" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
