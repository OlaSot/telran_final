import React, { useEffect, useState } from "react";
import s from "./index.module.css";
import CategoriesContainer from "../../components/CategoriesContainer";
import ProductsContainer from "../../components/ProductsContainer";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../requests/products_req";
import MainBanner from "../../components/MainBanner";
import SaleBanner from "../../components/SaleBanner";
import { Link } from "react-router-dom";
import Btn from "../../components/Btn";
import animation from './animation.json'
import Lottie from "lottie-react";

export default function MainPage() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const status = useSelector((state) => state.categories.status)

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Обновите состояние loading на основе значения status
    setLoading(status === 'loading');
  }, [status]);

  const products = useSelector((state) => state.allProducts.list);
  console.log(products);
  const get_random_products = () => {
    const shuffle_products = [...products]
      .filter((el) => el.discont_price !== null)
      .sort(() => Math.random() - 0.5);
    return shuffle_products.slice(0, 4);
  };

  const random_products = get_random_products();
  console.log("random", random_products);

  return (
    <div>
      {loading ? 
    <div className={s.animation}>
        <Lottie animationData={animation} />
    </div>
    :
        (<div className={s.main_container}>
      <div className={s.main_banner_wrapper}>
        <MainBanner />
      </div>

      <div className={s.catalog_container}>
        <div className={s.btn_container}>
          <h2 className={s.block_name}>Catalog</h2>
          <Link to="/categories">
            <Btn>All categories</Btn>
          </Link>
        </div>
        <CategoriesContainer limit={4} />
      </div>

      <div className={s.sale_banner}>
        <SaleBanner text={"GET A DISCOUNT"} />
      </div>
      <div className={s.gen_sale_container}>
        <ProductsContainer
          h1={"Sale"}
          products={random_products}
          productsStyle={true}
        />
      </div>
    </div>
    )}

    </div>
  );
}
