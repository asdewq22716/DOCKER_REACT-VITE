import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="container ">
        <nav className="mt-4">
          <ul>
            <li>
              <Link to="/Patiend">
                <h3>ระบบลงทะเบียนผู้ป่วย</h3>
              </Link>
            </li>
            <li>
              <Link to="shopee">
                <h3>Shopee</h3>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
