import React from "react";
import style from "../css/style.module.css";
// import mypic from '../images/mypic.png'

const Details = () => {
  return (
    <>
      <div className={style.mid}>
        <div className={style.detail}>
          <div>
            <h1>Contacts</h1>
            <p>
              <h3>Address</h3>
              <p> Wakad, Pune</p>

              <h3>Mobile No</h3>
              <p>+91 9653437435 </p>

              <h3>Email</h3>
              <p>kunalwalunj512@gmail.com</p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
