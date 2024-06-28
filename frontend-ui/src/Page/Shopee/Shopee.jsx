import React, { useEffect, useState } from "react";
import NavbarShopee from "./Navbar/Navbar";
import styles from "./Shopee.module.scss";
import ShowProduct from "./component/ShowImg";

export default function Shopee() {
  const [product, setProduct] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((result) => {
        console.log(result.products);
        setProduct(result.products);
        setFilteredProduct(result.products);
      });
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
    filterProducts(e.target.value);
  };

  const filterProducts = (searchText) => {
    if (!searchText) {
      setFilteredProduct(product); // ถ้าไม่มีข้อความที่ป้อนเข้ามาในช่อง input ให้แสดงสินค้าทั้งหมด
    } else {
      const filtered = product.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredProduct(filtered); // กรองสินค้าตามข้อความที่ป้อนเข้ามา
    }
  };

  const Product = filteredProduct.map((res, index) => {
    return <ShowProduct key={index} res={res} />;
  });

  return (
    <div>
      <NavbarShopee />
      <div className={styles.BackProduct}>
        <div className={styles.container}>
          <h3>Product</h3>
          <div className={styles.search}>
            <div className="form-group row">
              <div className="col-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search :"
                  value={text}
                  id="text"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className={styles.contentProduct}>{Product}</div>
        </div>
      </div>
    </div>
  );
}
