import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filter_products } from "../../../store/reducers/allProductsReducer";
import s from "./index.module.css";
import { filter_products_cat } from "../../../store/reducers/productsByCategoryReducer";


export default function FilterForm() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(Infinity);

  const dispatch = useDispatch();

  const handleChange = (min, max) => {
    // console.log(min, max);
    dispatch(filter_products({ minValue: min, maxValue: max }));
    dispatch(filter_products_cat({ minValue: min, maxValue: max }));
  };

  const handleMinValueChange = (e) => {
    let value = +e.target.value || 0;
    if (value < 0) value = 0;
    setMinValue(value);
    handleChange(value, maxValue);
  };

  const handleMaxValueChange = (e) => {
    let value = +e.target.value || Infinity;
    if (value < 0) value = 0;
    setMaxValue(value);
    handleChange(minValue, value);
  };

  return (
    <form className={s.price}>
      <p className={s.title}>Price</p>
      <input
        type="number"
        placeholder="from"
        value={minValue === 0 ? "" : minValue}
        onChange={handleMinValueChange}
      />
      <input
        type="number"
        placeholder="to"
        value={maxValue === Infinity || maxValue === 0 ? "" : maxValue}
        onChange={handleMaxValueChange}
      />
    </form>
  );
}
