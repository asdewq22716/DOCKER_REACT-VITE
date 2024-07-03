import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./scss/Navbar.module.scss"; // นำเข้าไฟล์ SCSS

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log(isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className={styles.fullHeader}>
      <div className={`container ${styles.navbarBrand}`}>
        <nav>
          <div className={styles.Navbar_toggle} onClick={toggleMenu}>
            <i className="fa fa-bars"></i>
          </div>
          <h3>ลงทะเบียนผู้ป่วย</h3>
          <ul
            className={`${styles.navbarMenu} ${isMenuOpen ? styles.open : ""}`}
          >
            <li>
              <NavLink to="/" activeclassname={styles.active}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Patiend" activeclassname={styles.active}>
                Patiend
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
