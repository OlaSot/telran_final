import React from "react";
import s from "./index.module.css";
import FormItem from "../FormItem";
import { getSale } from "../../requests/products_req";
import percent_sale from './5_percent.png'


export default function SaleBanner({ text }) {
  return (
    <div className={s.dwarf_wrapper}>
      <img src={percent_sale} alt="" className={s.percent_img} />

      <div className={s.discount_descr}>
        <h1>5% off</h1>
        <h2>on the first order</h2>

        <FormItem
          text={text}
          btn_style={"main_page_btn"}
          input_style_sale={"input_main_page"}
          onSubmitFunction={getSale}
        />
      </div>
    </div>
  );
}
