import React from "react";
import style from "../css/style.module.css";
// import mypic from '../images/mypic.png'

const Details = () => {
  return (
    <>
      <div className={style.mid}>
        <div className={style.detail}>
          <div>
            <h1> Projects</h1>

            <div className={style.para}>
              <h3> Clone of No-Broker</h3>
              <p>
                In this project I have create a homepage of No Broker website
                using html, css, js.
              </p>
            </div>

            <div className={style.para}>
              <h3> Clone of Spotify</h3>
              <p>  
                In this project I have create main webpage of Spotify website
                using React-js
              </p>
            </div>
               
            <div className={style.para}>
              <h3> Crud app </h3>
              <p >
                This project is designed to perform crud operations & this
                project I have create with the help of Bootstrap and React-js.
              </p>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Details;
