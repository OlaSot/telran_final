import React from "react";
import { useDispatch } from "react-redux";
import { sortProductsAction } from "../../../store/reducers/allProductsReducer";
import s from "./index.module.css";
import { sortProductsCatAction } from "../../../store/reducers/productsByCategoryReducer";

export default function SortForm() {
  const dispatch = useDispatch();

  const order = (e) => {
    dispatch(sortProductsAction(e.target.value));
    dispatch(sortProductsCatAction(e.target.value));
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
