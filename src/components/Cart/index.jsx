import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../CartItem";
import { clear_cart } from "../../store/reducers/cartReducer";
import s from "./index.module.css";
import FormItem from "../FormItem";
import { sendOrder } from "../../requests/products_req";
import plant from './plant.png'
import trashIcon from './trash_icon.svg'

export default function Cart() {
  const cart_state = useSelector((state) => state.cart);
  console.log(cart_state);
  const dispatch = useDispatch();
  const total_sum = cart_state.reduce(
    (acc, { price, count }) => acc + price * count,
    0
  );

  const total = total_sum.toFixed(2);

  const btn_text = "Order";



  useEffect(() => {
    localStorage.setItem("prod_in_Cart", JSON.stringify(cart_state));
  }, [cart_state]);

  return (
    <div className={s.container}>
      <h1>Cart:</h1>

      <div className={s.both_sides}>
        <div className={s.left_side}>
          {cart_state.length === 0 ? (
            <div className={s.empty_cart}>
              <img src={plant} alt="" className={s.empty_cart_img}/>
              <h1>Your cart is empty :(</h1>
            </div>
          ) : (
            cart_state.map((el) => <CartItem key={el.id} {...el} />)
          )}
        </div>

        <div className={s.right_side}>
          <div className={s.right_side_container}>
            <div className={s.upper_block}>
              <p>Total: {total}$</p>
              <div
                className={s.clear_btn}
                onClick={() => dispatch(clear_cart())}
              >
                <img src={trashIcon} alt="" />
              </div>
            </div>
            <FormItem
              text={btn_text}
              btn_style={"cart_btn"}
              cartData={cart_state}
              onSubmitFunction={sendOrder}
              input_style_sale={"input_cart_page"}
              className={s.form_item}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
