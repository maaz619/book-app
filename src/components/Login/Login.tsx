import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="Login">
      <form action="submit">
        <div className="form-container">
          <label htmlFor="Email">Email</label>
          <input type="email" name="email" id="Email" />
        </div>
      </form>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default Login;
