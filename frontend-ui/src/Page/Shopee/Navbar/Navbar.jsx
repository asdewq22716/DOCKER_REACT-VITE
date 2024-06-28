import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log(isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.header}>
          <h3>Logo</h3>
          <div className={styles.hamberger} onClick={toggleMenu}>
            <i className="fa fa-bars"></i>
          </div>
        </div>
        <ul className={`${isMenuOpen ? styles.navOpen : ""}`}>
          <li className={styles.liTop}>
            <Link>Product</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
