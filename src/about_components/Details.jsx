import React from "react";
import style from "../css/style.module.css";
  
const Details = () => {
  return (
    <>
      <div className={style.mid}>
        <div className={style.detail}>
          <div>
            <h1>Profile</h1>
            <p>
              To work on a challenging project which provides a opportunity
              to enhance my technical skills and knowledge, this could provide
              me an insight into new aspects so it would be helpful for my
              career
            </p>
            <a
              target="_blank" rel="noreferrer"
              href="https://drive.google.com/file/d/1aNVhl95oZj2L-7NFmBhjDo0jkdNo2R_n/view?usp=drive_link"
            >
              Download Resume
            </a>
            <a
              target="_blank"  rel="noreferrer"
              href="https://github.com/kunal-walunj"
            >
              My Projects
            </a>
          </div>  
        </div>
      </div>
    </>
  );
};

export default Details;
