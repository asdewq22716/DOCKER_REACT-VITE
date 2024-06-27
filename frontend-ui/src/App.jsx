import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Layout from "./Layout/Layout.jsx";

import Home from "./Page/Home.jsx";
import RegisterPatiend from "./Page/RegisterPatiend.jsx";
import EditPatiend from "./Page/EditPatiend.jsx";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPatiend />} />
          <Route path="/edit/:id" element={<EditPatiend />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
