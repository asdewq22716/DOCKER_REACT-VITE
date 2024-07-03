import React, { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./Patiend.module.scss";
import apiClient from "../../httpCmd";
import Swal from "sweetalert2";
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
export default function Patiend() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getUser();
  }, []);
  const getUser = () => {
    setLoading(true);
    apiClient
      .get(`/getPatiend`)
      .then((rerult) => {
        setUser(rerult.data);
        setLoading(false);
      })
      .catch((err) => {
        console.table(`error : ${err}`);
        setLoading(false);
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
    apiClient
      .delete(`/patiend/${id}`)
      .then((rerult) => {
        const paramDelect = user.filter((result) => result.id !== id);
        setUser(paramDelect);
      })
      .catch((err) => {
        console.table(`error : ${err}`);
      });
  };
  const handleEdit = (id) => {};
  const shopwLoading = () => {
    if (loading) {
      return (
        <div
          style={{
            display: "block",
            alignContent: "center",
            color: "red",
            opacity: "40%",
          }}
        >
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
        </div>
      );
    }
  };
  return (
    <>
      <Layout>
        <div>
          <div className={styles.headerText}>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  display: "block",
                  alignContent: "center",
                  marginRight: "5px",
                }}
              >
                <h4>ข้อมูลผู้ป่วย</h4>
              </div>
              {shopwLoading(loading)}
            </div>
            <div>
              <Link to="/register">
                <button className="btn btn-success">
                  <i className="bi bi-calendar-plus"></i>
                </button>
              </Link>
            </div>
          </div>
          <div className="table-responsive">
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
        </div>
      </Layout>
    </>
  );
}
