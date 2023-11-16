import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SingleProductItem from "../../components/SingleProductItem";
import { getSingleProduct } from "../../requests/products_req";


export default function SingleProductPage() {
  const { id } = useParams();

  const dispatch = useDispatch();

  // useEffect(() => dispatch(getSingleProduct(id)), [dispatch, id]);
  useEffect(() => {
    const fetchCategories = async () => {
         dispatch(getSingleProduct(id));
    };

    fetchCategories();
}, [dispatch, id]);

  const single_product = useSelector((state) => state.singleProduct.list);

  console.log('singleproduct', single_product);

  return (
    <div>
      <SingleProductItem single_product={single_product} />
    </div>
  );
}
