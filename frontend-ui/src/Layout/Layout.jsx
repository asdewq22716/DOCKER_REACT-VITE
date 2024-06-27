import React from "react";
import Navbar from "./Navbar";
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </>
  );
}
