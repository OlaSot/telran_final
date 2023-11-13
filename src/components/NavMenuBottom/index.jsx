import React from "react";
import s from "./index.module.css";
import { Link } from "react-router-dom";
import mainPageIcon from './mainPageicon.svg'
import shopBag from './shop_bag.svg'
import sale from './sale.svg'
import cart from './cart.png'

export default function NavMenuBottom({uniqueProductCount}) {
  return (
    <div className={s.container}>
      <div className={s.navMenu}>
      <div className={s.links}>
        <Link to="/">
          <img src={mainPageIcon} alt="" className={s.main} />
        </Link>
        <Link to="/products">
          <img src={shopBag} alt="" className={s.main} />
        </Link>
        <Link to="/sales">
          <img src={sale} alt="" className={s.main} />
        </Link>
        <Link to="/cart">
          <img src={cart} alt="" className={s.main} />
          <div className={s.amount}>
              <p>{uniqueProductCount}</p>
            </div>
        </Link>
      </div>
      </div>
    </div>
  );
}

