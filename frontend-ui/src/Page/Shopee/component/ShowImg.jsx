import React, { useState } from "react";
import styles from "./ShowImg.module.scss";
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";
export default function ShowImg({ res }) {
  return (
    <div className={styles.cardProduct}>
      <div className={styles.cardImage}>
        <img className={styles.img} src={res.images[0]} alt={res.title} />
      </div>
      <div className={styles.brand}>{res.brand}</div>
      <div className={styles.content}>
        <div className={styles.cardTitle}>{res.title}</div>
        <div className={styles.price}>${res.price}</div>
      </div>
      <div className={styles.availabilityStatus}>{res.availabilityStatus}</div>
      <div className={styles.cardAction}>
        <Link to="">รายละเอียด</Link>
      </div>
    </div>
  );
}
