import React, { useEffect, useState } from "react";
import s from "./index.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByCategory } from "../../requests/products_req";
import ProductsContainer from "../../components/ProductsContainer";
import FilterForm from "../../components/FilterForms/FilterForm";
import DiscountForm from "../../components/FilterForms/DiscountForm";
import SortForm from "../../components/FilterForms/SortForm";
import filter from './filter.svg'

export default function ProductsByCategoriesPage({handleFilterClick, isFilterVisible}) {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => dispatch(getProductsByCategory(id)), [dispatch, id]);



  const products_by_category = useSelector((state) => state.productsByCategory);

  console.log(products_by_category);

  const products = products_by_category?.data || [];

  // const new_products = products.map(el => ({...el, show_product: true }));
  // console.log(new_products)
  const category_title = products_by_category.category;
  // console.log('Продукты массив',products);
  return (
    <div className={s.container}>
      <div className={s.title_block}>
        <h1>{category_title?.title}</h1>
        <img
          src={filter}
          alt=""
          onClick={handleFilterClick}
          className={s.filter}
        />
      </div>
      <div className={`${s.filter_mobile} ${isFilterVisible ? s.show : ""}`}>
        <FilterForm />
        <DiscountForm />
        <SortForm />
      </div>
      <div className={s.sort_container}>
        <FilterForm />
        <DiscountForm />
        <SortForm />
      </div>
      <ProductsContainer products={products} />
    </div>
  );
}
