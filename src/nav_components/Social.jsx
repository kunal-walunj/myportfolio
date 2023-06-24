import React from "react";
import style from "../css/style.module.css";

const Social = () => {
  return (
    <>
      <div className={style.social}>
        <div className={style.icon}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/kunal_walunj_5120"
          >
            <i class="fa-brands fa-square-instagram"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/kunalwalunj5120/"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/kunal-walunj"
          >
            <i class="fa-brands fa-square-github"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://telegram.me/kunalwalunjtelegram"
          >
            <i class="fa-brands fa-telegram"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Social;
