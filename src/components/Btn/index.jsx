import React from "react";
import s from "./index.module.css";
import button from './button.png'

export default function Btn({ children }) {
  return (
    <div className={s.btn_cat}>
      <img src={button} alt="" className={s.btn_image} />
      <p>{children}</p>
    </div>
  );
}
