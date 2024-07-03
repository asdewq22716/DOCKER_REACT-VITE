import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import logo from "../../../assets/logo_b.png";
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log(isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.header}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
        </div>
        <div className={styles.hamberger} onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </div>
        <ul className={`${styles.ul_bar} ${isMenuOpen ? styles.navOpen : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shopee">Shop</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
