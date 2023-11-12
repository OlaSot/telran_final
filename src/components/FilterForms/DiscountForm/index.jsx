import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { discountedProductsCatAction } from "../../../store/reducers/productsByCategoryReducer";
import s from "./index.module.css";
import { discountedProductsAction } from "../../../store/reducers/allProductsReducer";

export default function DiscountForm() {
  const dispatch = useDispatch();

  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const handleChange = () => setCheckboxChecked(!checkboxChecked);

  console.log(checkboxChecked);

  const getDiscountedProducts = (e) => {
    dispatch(discountedProductsAction(e.target.checked));
    dispatch(discountedProductsCatAction(e.target.checked));
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
