import React from "react";
import s from "./index.module.css";

export default function FormButton({ children, btn_style }) {
  return <button className={s[btn_style]}>{children}</button>;
}
