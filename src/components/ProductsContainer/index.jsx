import React from "react";
import ProductCard from "../ProductCard";
import s from "./index.module.css";

export default function ProductsContainer({ products, productsStyle, h1 }) {
  return (
    <div>
      <h1>{h1}</h1>
      <div className={s.products_container}>
        {products
          ?.filter((el) => el.show_product && el.show_product_by_sale)
          .map((el) => (
            <ProductCard key={el.id} {...el} productsStyle={productsStyle} />
          ))}
      </div>
    </div>
  );
}
