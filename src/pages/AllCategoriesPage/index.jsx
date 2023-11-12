import React from "react";
import s from "./index.module.css";
import CategoriesContainer from "../../components/CategoriesContainer";

export default function AllCategoriesPage() {
  return (
    <div className={s.container}>
      <h1>Categories</h1>
      <CategoriesContainer />
    </div>
  );
}
