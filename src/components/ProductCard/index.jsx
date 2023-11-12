import React from "react";
import s from "./index.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../../store/reducers/cartReducer";

export default function ProductCard({
  id,
  title,
  image,
  price,
  discont_price,
  productsStyle,
}) {

  const dispatch = useDispatch();
  
  const saleCalculation = (price, discont_price) => {
    if (discont_price === null) {
      return 0;
    }
    return Math.floor(((price - discont_price) / price) * 100);
  };

  const sale = saleCalculation(price, discont_price);

  const product = { id, title, image, price, discont_price, productsStyle };

  return (
    <div className={s.container}>
      <div>
        <Link to={`/products/${id}`}>
          <div
            key={id}
            className={s.img}
            style={{
              backgroundImage: `url(https://telran-final-server.onrender.com/${image})`,
              backgroundSize: "cover",
            }}
          >
            <div className={s.square} />
          </div>
        </Link>
        <div
          className={s.add_btn}
          onClick={() => dispatch(addToCartAction(product))}
        >
          Add to cart
        </div>
      </div>

      <div className={s.price_container}>
        <p className={s.sale_desc}>{title}</p>
        <div className={s.price_wrapper}>
          {discont_price ? (
            <>
              <p className={s.old_price}>{price}$</p>
              <p className={s.new_price}>{discont_price}$</p>
              <p className={s.discount}>-{sale}%</p>
            </>
          ) : (
            <p className={s.new_price}>{price}$</p>
          )}
        </div>
      </div>
    </div>
  );
}
