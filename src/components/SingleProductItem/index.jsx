import React, { useState } from "react";
import s from "./index.module.css";
import { useDispatch } from "react-redux";
import { add_to_cart } from "../../store/reducers/cartReducer";
import button from './button.png'
import ModalWindowProduct from "../ModalWindowProduct";

export default function SingleProductItem({ single_product }) {
  const { title, price, description, image, discont_price } = single_product;

  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false)

  const saleCalculation = (price, discont_price) => {
    if (discont_price === null) {
      return 0;
    }
    return Math.floor(((price - discont_price) / price) * 100);
  };

  const sale = saleCalculation(price, discont_price);

  const addToCart = () => {
    dispatch(add_to_cart(single_product));
    setShowModal(true)

      setTimeout(() => {
        setShowModal(false)
      },800)
    }
    

  return (
    <div className={s.product_container}>
      <p className={s.title}>{title}</p>
      <div className={s.container}>
        <div className={s.square}>
          <img
            className={s.image}
            src={`https://telran-final-server.onrender.com/${image}`}
            alt=""
          />
        </div>
        <div className={s.right_side}>
          {discont_price === null ? (
            <div className={s.prices}>
              <p>{price}$</p>
            </div>
          ) : (
            <div className={s.discount_price}>
              <p>{discont_price}$</p>
              <p>{price}$</p>
              <p>-{sale}%</p>
            </div>
          )}
          <div className={s.button} onClick={addToCart}>
            <img src={button} alt="" className={s.button_img} />
            <p>To cart</p>
          </div>
          <div className={s.description}>
            <p>Description:</p>
            <p>{description}</p>
          </div>
          {showModal && <ModalWindowProduct />}
        </div>
      </div>
    </div>
  );
}
