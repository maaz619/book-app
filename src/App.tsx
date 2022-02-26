import Home from "./Components/Home";
import Login from "Components/Login/Login";
import Order from "Components/Order";
import Product from "Components/Product";
import { AuthProvider } from "Contexts/AuthContext";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "Components/Login/Signup";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
