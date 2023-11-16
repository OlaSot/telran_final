import React from "react";
import s from "./index.module.css";
import { useDispatch } from "react-redux";
import {
  decr_count,
  delete_from_cart,
  incr_count,

} from "../../store/reducers/cartReducer";

export default function CartItem({
  id,
  title,
  price,
  count,
  image,
}) {
  const dispatch = useDispatch();
  const price_with_count = (price * count).toFixed(2);

  return (
    <div className={s.container}>
      <div className={s.left_side}>
        <img src={`https://telran-final-server.onrender.com${image}`} alt="" className={s.img} />
        <div className={s.text_block}>
          <p>{title}</p>
        </div>
        <div className={s.btns_container}>
          <button onClick={() => dispatch(decr_count(id))}>-</button>
          <p>{count}</p>
          <button onClick={() => dispatch(incr_count(id))}>+</button>
        </div>
        <p>{price_with_count}$</p>

        <span className={s.delete_btn} onClick={() => dispatch(delete_from_cart(id))}>X</span>
      </div>

      <div className={s.right_side}></div>
    </div>
  );
}
