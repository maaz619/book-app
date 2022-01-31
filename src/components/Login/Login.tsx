import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import {
  auth,
  signInWithGoogle,
  logInWithEmailAndPassword,
  logout,
} from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  console.log(email, password);
  useEffect(() => {
    if (user) {
      console.log(user.displayName);
    }
    if (!user) return navigate("/login");
  }, [user, loading]);
  return (
    <div className="Login">
      <form className="form" action="submit">
        <div className="form-container">
          <label htmlFor="Email">Email</label>
          <input
            onChange={(e) => setEmail(e.currentTarget.value)}
            type="email"
            name="email"
            value={email}
            id="Email"
          />
          <label htmlFor="Password">Password</label>
          <input
            onChange={(e) => setPassword(e.currentTarget.value)}
            value={password}
            type="password"
            name="password"
            id="Password"
          />
        </div>
        <button
          onClick={() => logInWithEmailAndPassword(email, password)}
          style={{ padding: ".2em" }}
        >
          sign in
        </button>
        <Link to={user ? "/" : ""} state={user?.displayName}>
          <button
            onClick={signInWithGoogle}
            style={{
              padding: ".7em",
              backgroundColor: "#1a73e8",
              color: "white",
              border: "none",
              borderRadius: ".5em",
              width: "9rem",
            }}
          >
            sign in with google
          </button>
        </Link>
        <button onClick={logout}>sign out</button>

        <Link to="/">Go Back</Link>
      </form>
    </div>
  );
};

export default Login;
