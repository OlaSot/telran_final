import React from "react";
import { useDispatch } from "react-redux";
import s from "./index.module.css";
import { sort_prods_cat } from "../../../store/reducers/productsByCategoryReducer";
import {sort_products} from "../../../store/reducers/allProductsReducer";


export default function SortForm() {
  const dispatch = useDispatch();

  const order = (e) => {
    dispatch(sort_products(e.target.value));
    dispatch(sort_prods_cat(e.target.value));
  };

  return (
    <div className={s.sorted}>
      <label className={s.title} htmlFor="sortSelect">
        Sorted:
      </label>
      <select id="sortSelect" onInput={order} defaultValue="none">
        <option value="none">By default</option>
        <option value="title">By alphabet A-Z</option>
        <option value="price_asc">By price ASC</option>
        <option value="price_desc">By price DESC</option>
      </select>
    </div>
  );
}
