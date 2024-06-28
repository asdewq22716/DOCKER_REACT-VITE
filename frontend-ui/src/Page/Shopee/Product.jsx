import React, { useEffect, useState } from "react";
import styles from "./Product.module.scss";
import NavbarShopee from "./Navbar/Navbar";
import { json, useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();
  var [product, setProduct] = useState();
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setProduct(result);
        console.log(result);
      });
  }, [id]);
  return (
    <div className={styles.main}>
      <NavbarShopee />
      <div className={styles.cardProduct}>
        <div>
          <div className={styles.item1}>
            <img src={product.images[0]} alt="" />
          </div>
          <div className={styles.item2}>
            <div className="form-group row">
              <div className="col-2">
                <label htmlFor=""><b>title</b></label>
              </div>
              <div className="col-6">
                <label htmlFor="">{product.title}</label>
              </div>
            </div>
          </div>
          <div className={styles.item3}></div>
        </div>
      </div>
    </div>
  );
}
