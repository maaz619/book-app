import Home from "./components/Home";
import Login from "components/Login/Login";
import Order from "components/Order";
import Product from "components/product";
import { AuthProvider } from "Contexts/AuthContext";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "components/Login/Signup";
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
