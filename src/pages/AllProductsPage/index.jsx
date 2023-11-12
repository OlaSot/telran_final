import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../requests/products_req";
import ProductsContainer from "../../components/ProductsContainer";
import s from "./index.module.css";
import SortForm from "../../components/FilterForms/SortForm";
import FilterForm from "../../components/FilterForms/FilterForm";
import DiscountForm from "../../components/FilterForms/DiscountForm";

export default function AllProductsPage({
  isFilterVisible,
  handleFilterClick,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts);
  }, [dispatch]);

  const allProducts = useSelector((state) => state.allProducts);
  console.log(allProducts);

  return (
    <div className={s.container}>
      <div className={s.title_block}>
        <h1>All products</h1>
        <img
          src="/media/filter.svg"
          alt="filter"
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
      <ProductsContainer products={allProducts} />
    </div>
  );
}
