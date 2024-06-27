import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
export default function editPatiend() {
  const { id } = useParams();
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
  useEffect(() => {
    getUserSelect(id);
  }, [id]);
  const getUserSelect = (id) => {
    console.log(id);
    axios
      .get(`http://localhost:6868/api/getPatiend/${id}`)
      .then((rerult) => {
        console.log(rerult);
        const { firstname, lastname, idcard, age } = rerult.data;
        console.log(rerult.data);
        setDetailForm({
          name: firstname ?? "",
          lastname: lastname ?? "",
          idCard: idcard ?? "",
          age: age ?? "",
        });
      })
      .catch((err) => {
        console.table(`error : ${err}`);
      });
  };
  const handleSubmit = () => {
    const { name, lastname, idCard, age } = detailform;
    const convert = {
      firstname: name,
      lastname: lastname,
      idcard: idCard,
      age: age,
    };
    axios
      .put(`http://localhost:6868/api/patiend/${id}`, detailform)
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: "",
          text: "เเก้ไขรายการสำเร็จ",
          icon: "success",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
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
  );
}
