import React, { useState } from "react";
import styles from "./ShowImg.module.scss";
import { BrowserRouter as Router, Link, useParams,useNavigate } from "react-router-dom";
import { Rating } from "@material-tailwind/react";

export default function ShowImg({ res }) {
  const navigate = useNavigate();
  const handleDivClick = () => {
    navigate(`/product/${res.id}`);
  };
  return (
    <div className={`shadow-md ${styles.cardProduct}`} onClick={handleDivClick}>
      <div className={styles.cardImage}>
        <img src={res.images[0]} alt={res.title} />
      </div>
      <div className={styles.content}>
        <div className={styles.brand}>{res.brand}</div>
        <div className={styles.cardTitle}>{res.title}</div>
        <div className={styles.rating}>
          <Rating
            className={styles.RatingStyle}
            value={parseInt(res.rating, 10)}
            readonly
          />
        </div>
        <div className={styles.price}>$ {res.price}</div>
        <div className={styles.shoping}>
          <Link to={`/product/${res.id}`} className={styles.cardAction}>
            <i className="bi bi-cart3"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
