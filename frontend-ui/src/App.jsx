import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Layout from "./Layout/Layout.jsx";

import Home from "./Page/Home.jsx";
import Patiend from "./Page/Patiend.jsx";
import RegisterPatiend from "./Page/RegisterPatiend.jsx";
import EditPatiend from "./Page/EditPatiend.jsx";
import Shopee from "./Page/Shopee/Shopee.jsx";
import Product from "./Page/Shopee/Product.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Patiend" element={<Patiend />} />
        <Route path="/register" element={<RegisterPatiend />} />
        <Route path="/edit/:id" element={<EditPatiend />} />
        <Route path="/shopee" element={<Shopee />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Router>
  );
};

export default App;
