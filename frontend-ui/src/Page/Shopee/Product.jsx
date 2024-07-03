import React, { useEffect, useState } from "react";
import styles from "./Product.module.scss";
import NavbarShopee from "./Navbar/Navbar";
import { useParams } from "react-router-dom";
import { Rating } from "@material-tailwind/react";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null); // ปรับจาก var [product, setProduct] = useState({});
  const [imgMain, setImgMain] = useState(null);
  const [activeTab, setActiveTab] = useState("รายละเอียด");
  const [detailProduct, setDetailProduct] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        setProduct(result);
        setImgMain(result.images[0]);
        setReviews(result.reviews);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setProduct(null);
      });
  }, [id]);
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  const onclickImg = (result) => {
    setImgMain(result);
  }; //เปลี่ยนรูป
  const imgSub = product?.images.map((result, index) => {
    return (
      <img
        key={index}
        onClick={() => {
          onclickImg(result);
        }}
        className={styles.imgSubStyle}
        src={result}
        alt=""
      />
    );
  });
  const ProductShow = (
    <div className={styles.cardProduct}>
      <div className={styles.itemImg}>
        <img className={styles.imgMain} src={imgMain} />
      </div>
      <div className={styles.imaSubDiv} style={{ cursor: "pointer" }}>
        {imgSub}
      </div>
    </div>
  );

  const ProductDetail = (
    <div className={styles.PDS}>
      <div className={styles.PDH}>
        <label htmlFor="">weight</label>
      </div>
      <div className={styles.PDU}>
        <label htmlFor="">{product?.weight}</label>
      </div>
      <div className={styles.PDH}>
        <label htmlFor="">dimensions</label>
      </div>
      <div className={styles.PDU}>
        <label htmlFor="">{`${product?.dimensions.width}'w ${product?.dimensions.height}'h ${product?.dimensions.depth}'d `}</label>
      </div>
      <div className={styles.PDH}>
        <label htmlFor="">warrantyInformation</label>
      </div>
      <div className={styles.PDU}>
        <label htmlFor="">{product?.warrantyInformation}</label>
      </div>
      <div className={styles.PDH}>
        <label htmlFor="">shippingInformation</label>
      </div>
      <div className={styles.PDU}>
        <label htmlFor="">{product?.shippingInformation}</label>
      </div>
    </div>
  );
  console.log(reviews);

  const ShowReviews = reviews.map((review, index) => (
    <div className={styles.ReviewsDivMain}>
      <div key={index}>
        <div className={styles.rating}>
          <Rating
            className={styles.RatingStyle}
            value={parseInt(review.rating, 10)}
            readonly
          />
        </div>
        <label htmlFor="">Comment: {review.comment}</label>
        <br />
        <label htmlFor="">Reviewer: {review.reviewerName}</label>
      </div>
    </div>
  ));
  return (
    <div className={styles.main}>
      <NavbarShopee />
      <div className={`container ${styles.itemStyle}`}>
        <div className={styles.itemImgDisplay}>
          {product ? ProductShow : "Loading..."}
        </div>
        <div className={styles.itemDetail}>
          <div>
            <label className={styles.titleM}>{product?.title}</label>
          </div>
          <div className={styles.brandDiv}>
            <label className={styles.BrandsTitle}>Brands : </label>
            <label className={styles.brand}>{product?.brand}</label>
          </div>
          <div className={styles.priceDiv}>
            <label className={styles.price}>$ {product?.price}</label>
          </div>
          <div className={styles.descriptionDiv}>
            <label className={styles.description}>{product?.description}</label>
          </div>
        </div>
        <div className={styles.itemContent}>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "รายละเอียด" ? "active" : ""
                }`}
                aria-current="page"
                href="##"
                onClick={(e) => {
                  handleTabClick("รายละเอียด");
                }}
              >
                รายละเอียด
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "Reviews" ? "active" : ""
                }`}
                href="##"
                onClick={(e) => {
                  handleTabClick("Reviews");
                }}
              >
                Reviews
              </a>
            </li>
          </ul>
          {activeTab == "รายละเอียด" ? ProductDetail : ""}
          {activeTab == "Reviews" ? ShowReviews : ""}
        </div>
      </div>
    </div>
  );
}
