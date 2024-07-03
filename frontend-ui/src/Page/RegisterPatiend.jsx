import React, { useState } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import apiClient from "../../httpCmd";
import Layout from "../Layout/Layout";
export default function () {
  const [detailform, setDetailForm] = useState({
    name: "",
    lastname: "",
    idCard: "",
    age: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setDetailForm((result) => ({ ...result, [id]: value }));
  };
  const handleSubmit = (e) => {
    const { name, lastname, idCard, age } = detailform;
    apiClient
      .post(`/createPatiend`, {
        name,
        lastname,
        idCard,
        age,
      })
      .then((response) => {
        Swal.fire({
          title: "",
          text: "บันทึกข้อมูลสำเร็จ",
          icon: "success",
        });
        setDetailForm({
          name: "",
          lastname: "",
          idCard: "",
          age: "",
        });
      })
      .catch((err) => {
        console.log(`error : ${err}`);
        Swal.fire({
          title: "",
          text: err.response.data.error,
          icon: "warning",
        });
      });
  };
  return (
    <>
      <Layout>
        <div className="">
          <h4>เพิ่มข้อมูล</h4>
          <div className="form-group">
            <label htmlFor="">ชื่อ</label>
            <input
              type="text"
              id="name"
              value={detailform.name}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">นามสกุล</label>
            <input
              type="text"
              id="lastname"
              value={detailform.lastname}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">รหัส13หลัก</label>
            <input
              type="text"
              id="idCard"
              value={detailform.idCard}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">อายุ</label>
            <input
              type="text"
              id="age"
              value={detailform.age}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <br />
          <button className="btn btn-success" onClick={handleSubmit}>
            บันทึก
          </button>
        </div>
      </Layout>
    </>
  );
}
