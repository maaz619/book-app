import { useAuth } from "Contexts/AuthContext";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";

const SignUp: React.FC = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(true);

  const context = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("password do not match");
    }
    try {
      setLoading(false);
      await context?.signup({ email, password });
      navigate("/");
    } catch (FirebaseError: any) {
      setLoading(true);
      alert(FirebaseError);
      console.log("fail to create an account", FirebaseError);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.currentTarget.name;
    if (value === "email") return setEmail(e.currentTarget.value);
    else if (value === "password") return setPassword(e.currentTarget.value);
    else if (value === "confirmPassword")
      return setConfirmPassword(e.currentTarget.value);
  };

  return (
    <React.Fragment>
      {loading ? (
        context?.currentUser?.email ? (
          <div>You're logged in</div>
        ) : (
          <div className="container">
            <form onSubmit={handleSubmit} action="" className="form">
              <div className="form-container">
                <label htmlFor="email">Email</label>
                <input
                  onChange={handleChange}
                  value={email}
                  type="email"
                  name="email"
                  id="email"
                />
                <label htmlFor="password">Password</label>
                <input
                  onChange={handleChange}
                  value={password}
                  type="password"
                  name="password"
                  id="password"
                />
                <label htmlFor="confirm password">Confirm Password</label>
                <input
                  onChange={handleChange}
                  value={confirmPassword}
                  type="password"
                  name="confirmPassword"
                  id="confirm password"
                />
              </div>
              <button className="LS-button">Create account</button>
            </form>
            <span className="relogin">
              Already have an accout?{" "}
              <Link to="/login">
                <span className="clr-login">Log In</span>
              </Link>
            </span>
          </div>
        )
      ) : (
        <div className="spinner">
          Please Wait.......
          <Oval color="#00BFFF" height={80} width={80} />
        </div>
      )}
    </React.Fragment>
  );
};

export default SignUp;
