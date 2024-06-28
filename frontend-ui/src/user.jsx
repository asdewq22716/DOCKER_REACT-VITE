import React, { useEffect, useState } from "react";
import apiClient from '../httpCmd';

export default function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUser();
  }, []);
  const getUser = () => {
    apiClient
      .get(`/getPatiend`)
      .then((rerult) => {
        console.table(rerult.data);
        setUser(rerult.data);
      })
      .catch((err) => {
        console.table(`error : ${err}`);
      });
  };

  return (
    <>
      <div>
        <div className="container">
          <h3>ข้อมูลผู้ป่วย</h3>
        </div>
      </div>
    </>
  );
}
