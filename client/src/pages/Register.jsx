import React from "react";
import "../style.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button>login</button>
        <span>
          Don't you have an account ?<Link to="/register"> Register </Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
