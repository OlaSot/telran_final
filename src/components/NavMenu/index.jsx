import React from "react";
import { Link } from "react-router-dom";
import s from "./index.module.css";
import logo from "./logo.png";
import Btn from "../Btn";
import cart from "./cart.png";
import { useSelector } from "react-redux";

export default function NavMenu() {
  const items = useSelector((state) => state.cart);

  const uniqueProductIds = [];
  console.log(uniqueProductIds);

  items.forEach((item) => {
    if (!uniqueProductIds.includes(item.id)) {
      uniqueProductIds.push(item.id);
    }
  });

  const uniqueProductCount = uniqueProductIds.length;

  console.log(uniqueProductCount);

  return (
    <div className={`${s.main_container} `}>
      <Link to="/">
        <img src={logo} alt="logo" className={s.logo} />
      </Link>
      <div className={s.container}>
        <Link to="/categories">
          <Btn>Catalog</Btn>
        </Link>

        <div className={`${s.links} `}>
          <Link to="/">Main Page</Link>
          <Link to="/products">All products</Link>
          <Link to="/sales">All sales</Link>
        </div>
        <Link to="/cart">
          <div className={s.cart}>
            <img className={s.cart_img} src={cart} alt="shop_bag" />
            <div className={s.amount}>
              <p>{uniqueProductCount}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
