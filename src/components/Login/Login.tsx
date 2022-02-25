import React, { useState, useEffect } from "react";
import "../styles/login.css";
import { useAuth } from "Contexts/AuthContext";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const context = useAuth();
  const handleLogin = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    try {
      await context?.login({ email, password });
    } catch (err) {
      console.log("fail to create an account", err);
    }
  };
  useEffect(() => {
    if (context?.currentUser) {
      console.log(context?.currentUser.email);
      console.log(context?.currentUser);
    } else console.log("user not available");
  }, [context?.currentUser]);

  return (
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
        <button className="LS-button">sign in</button>
      </form>
      <button onClick={context?.signout} className="LS-button">
        sign out
      </button>
    </div>
  );
};

export default Login;
