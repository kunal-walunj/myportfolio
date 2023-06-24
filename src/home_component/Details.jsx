import React from "react";
import style from "../css/style.module.css";
import About from "../about_components/Details"
import Skills from "../skills_components/Details"
import Projects from "../project_components/Details"
import Contacts from "../contacts_components/Details"
import mypic from "../images/mypic.png";


const Details = () => {
  return (
    <>
      <div className={style.mid}>
        <div className={style.detail}>
          <div>
            <h1>I,M Kunal Walunj</h1>
            <p>
              This is my official Portfolio website to showcase my all works
              related to web development and ui design.
            </p>
            <div className={style.images}>
            <img src={mypic} className={style.mypic} alt="img" />
            </div>
          </div>
        </div>
      </div>
      <About/>
      <Skills/> 
      <Projects/>
      <Contacts/>
    </>
  );
};

export default Details;
