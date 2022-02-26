import React, { useState, useEffect } from "react";
import "../styles/login.css";
import { useAuth } from "Contexts/AuthContext";
import { Oval } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const context = useAuth();
  const navigate = useNavigate();
  const handleLogin = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    try {
      setLoading(false);
      await context?.login({ email, password });
      navigate("/");
    } catch (err) {
      console.log("fail to create an account", err);
    }
  };
  useEffect(() => {}, [context?.currentUser]);

  return (
    <>
      {loading ? (
        context?.currentUser?.email ? (
          <div className="spinner" style={{ fontSize: "4rem" }}>
            You're already logged in
          </div>
        ) : (
          <div className="container">
            <form onSubmit={handleLogin} className="form">
              <div className="form-container">
                <label htmlFor="Email">Email</label>
                <input
                  required
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  type="email"
                  name="email"
                  value={email}
                  id="Email"
                />
                <label htmlFor="Password">Password</label>
                <input
                  required
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  value={password}
                  type="password"
                  name="password"
                  id="Password"
                />
              </div>
              <button className="LS-button">Sign in</button>
            </form>
            <span className="relogin">
              Don't have an accout?{" "}
              <Link to="/signup">
                <span className="clr-login">Sign Up</span>
              </Link>
            </span>
          </div>
        )
      ) : (
        <div className="spinner">
          <Oval color="#00BFFF" height={80} width={80} />
        </div>
      )}
    </>
  );
};

export default Login;
