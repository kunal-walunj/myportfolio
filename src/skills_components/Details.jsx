import React from "react";
import style from "../css/style.module.css";
import sql from "../images/Microsoft-sql-server-01/Microsoft-sql-server-01.svg";
import java from "../images/Java-01/Java-01.svg";
import html from "../images/HTML-5-01/HTML-5-01.svg";
import css from "../images/CSS-3-01/CSS-3-01.svg";
import bootstrap from "../images/Bootstrap-07/Bootstrap-07.svg";
import tcss from "../images/Tailwindcss-01/Tailwindcss-01.svg";
import js from "../images/JavaScript-01/JavaScript-01.svg";
import react from "../images/React-01/React-01.svg";

const Details = () => {
  return (
    <>
      <div className={style.mid}>
        <div className={style.detail}>z
          <div className={style.skills}>
            <h1>Skills</h1>
            <div className={style.skillbox}>
              <img src={sql} alt="img" />
              <img src={java} alt="img" />
              <img src={html} alt="img" />
              <img src={css} alt="img" />
              <img src={bootstrap} alt="img" /> 
              <img src={tcss} alt="img" />
              <img src={js} alt="img" />
              <img src={react} alt="img" />  
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
