import React from "react";
import style from "../css/style.module.css";
// import mypic from '../images/mypic.png'

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
              href="https://drive.google.com/file/d/1E7rpQXgxWRHhc94klNHFl9cDid8c2bcR/view?usp=drivesdk"
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
