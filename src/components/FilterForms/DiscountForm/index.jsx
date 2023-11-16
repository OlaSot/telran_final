import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { discounted_products_cat } from "../../../store/reducers/productsByCategoryReducer";
import s from "./index.module.css";
import { discounted_products } from "../../../store/reducers/allProductsReducer";

export default function DiscountForm() {
  const dispatch = useDispatch();

  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const handleChange = () => setCheckboxChecked(!checkboxChecked);

  console.log(checkboxChecked);

  const getDiscountedProducts = (e) => {
    dispatch(discounted_products(e.target.checked));
    dispatch(discounted_products_cat(e.target.checked));
  };

  return (
    <div className={s.discount}>
      <p className={s.title}>Discounted items:</p>
      <input
        type="checkbox"
        checked={checkboxChecked}
        onChange={handleChange}
        onClick={getDiscountedProducts}
      />
    </div>
  );
}
