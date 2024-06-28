import React, { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./Patiend.module.scss";
import axios from "axios";
import Swal from "sweetalert2";
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
export default function Patiend() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUser();
  }, []);
  const getUser = () => {
    axios
      .get(`http://localhost:5000/api/getPatiend`)
      .then((rerult) => {
        setUser(rerult.data);
      })
      .catch((err) => {
        console.table(`error : ${err}`);
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "",
      text: "คุณต้องการลบรายการหรือไม่",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ลบรายการ",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        DeleteDn(id);
        Swal.fire({
          title: "Deleted!",
          text: "ลบรายการสำเร็จ",
          icon: "success",
        });
      }
    });
  };
  const DeleteDn = (id) => {
    axios
      .delete(`http://localhost:5000/api/patiend/${id}`)
      .then((rerult) => {
        const paramDelect = user.filter((result) => result.id !== id);
        setUser(paramDelect);
      })
      .catch((err) => {
        console.table(`error : ${err}`);
      });
  };
  const handleEdit = (id) => {};
  return (
    <>
      <Layout>
        <div>
          <div className={styles.headerText}>
            <h4>ข้อมูลผู้ป่วย</h4>
            <div>
              <Link to="/register">
                <button className="btn btn-success">
                  <i className="bi bi-calendar-plus"></i>
                </button>
              </Link>
            </div>
          </div>
          <table className="table table-hover">
            <thead>
              <tr>
                <td>id</td>
                <td>เลข13หลัก</td>
                <td>ชื่อ</td>
                <td>นามสกุล</td>
                <td>อายุ</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {user.map((e, index) => {
                return (
                  <tr key={index}>
                    <td> {e.id}</td>
                    <td> {e.idcard}</td>
                    <td> {e.firstname}</td>
                    <td> {e.lastname}</td>
                    <td> {e.age}</td>
                    <td style={{ textAlign: "center" }}>
                      <Link to={`/edit/${e.id}`}>
                        <button
                          type="button"
                          className="btn btn-warning"
                          onClick={() => {
                            handleEdit(e.id);
                          }}
                        >
                          <i className="bi bi-terminal"></i>
                        </button>
                      </Link>
                      &nbsp;
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                          handleDelete(e.id);
                        }}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Layout>
    </>
  );
}
