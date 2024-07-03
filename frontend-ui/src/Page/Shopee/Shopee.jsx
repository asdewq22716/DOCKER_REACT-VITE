import React, { useEffect, useState } from "react";
import NavbarShopee from "./Navbar/Navbar";
import styles from "./Shopee.module.scss";
import ShowProduct from "./component/ShowImg";

export default function Shopee() {
  const [product, setProduct] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [text, setText] = useState("");
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((result) => {
        console.log(result.products);
        setProduct(result.products);
        setFilteredProduct(result.products);
        const uniqueBrands = [
          ...new Set(result.products.map((product) => product.brand)),
        ];
        setBrands(uniqueBrands);
        console.log(uniqueBrands);
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
  const handleBrandChange = (e) => {
    const brand = e.target.value;
    setSelectedBrand(brand);
    if (brand === "") {
      setFilteredProduct(product);
    } else {
      setFilteredProduct(product.filter((result) => result.brand === brand));
    }
  };
  return (
    <div>
      <NavbarShopee />
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div className={`${styles.container}`}>
          <div className={styles.search}>
            <div className="form-group row">
              <div className="col-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search :"
                  value={text}
                  id="text"
                  onChange={handleChange}
                />
              </div>
              <div className="col-4"></div>
              <div className="col-4">
                <select
                  className="form-select"
                  aria-label="Floating label disabled select example"
                  value={selectedBrand}
                  onChange={handleBrandChange}
                >
                  <option value="">All Brands</option>
                  {brands.map((brand, index) => (
                    <option key={index} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className={styles.contentProduct}>{Product}</div>
        </div>
      </div>
    </div>
  );
}
