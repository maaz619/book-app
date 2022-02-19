import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles/login.css";
import { auth, signInWithGoogle, logout } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { User } from "../../interfaces";
import { useAuthState } from "react-firebase-hooks/auth";
interface UserInput {
  name: string;
  email: string;
}
const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const signInWithEmail = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password).then((res) => {
      navigate("/");
    });
  };

  useEffect(() => {
    try {
      if (user) {
        console.log(user.displayName);
      }
    } catch {}
  }, [user, loading]);
  return (
    <div className="Login">
      <form className="form">
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
        {/* <Link to="" state={user?.displayName}>
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
        </Link> */}
      </form>
      <button
        onClick={() => signInWithEmail(email, password)}
        style={{
          padding: ".7em",
          backgroundColor: "#1a73e8",
          color: "white",
          border: "none",
          borderRadius: ".5em",
          width: "9rem",
        }}
      >
        sign in
      </button>
      {/* <button
        style={{
          padding: ".7em",
          backgroundColor: "#1a73e8",
          color: "white",
          border: "none",
          borderRadius: ".5em",
          width: "9rem",
        }}
        onClick={logout}
      >
        sign out
      </button> */}
    </div>
  );
};

export default Login;
