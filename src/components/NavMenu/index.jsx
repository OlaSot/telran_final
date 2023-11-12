import React from "react";
import { Link } from "react-router-dom";
import s from "./index.module.css";
import logo from './logo.png'
import Btn from "../Btn";
import cart from './cart.png'

export default function NavMenu() {
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
          <img className={s.cart_img} src={cart} alt="shop_bag" />
        </Link>
      </div>
    </div>
  );
}
