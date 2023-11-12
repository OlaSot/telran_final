import React from "react";
import { useSelector } from "react-redux";
import Category from "../Category";
import s from "./index.module.css";

export default function CategoriesContainer({ limit }) {
  const categories = useSelector((state) => state.categories);

  const displayed_categories = limit ? categories.slice(0, 4) : categories;

  return (
    <div className={s.all_categories}>
      {displayed_categories.map((el) => (
        <Category key={el.id} {...el} />
      ))}
    </div>
  );
}
