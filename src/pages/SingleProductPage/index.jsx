import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SingleProductItem from "../../components/SingleProductItem";
import { getOneProduct } from "../../requests/products_req";


export default function SingleProductPage() {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => dispatch(getOneProduct(id)), [dispatch, id]);

  const single_product = useSelector((state) => state.singleProduct);

  return (
    <div>
      <SingleProductItem single_product={single_product} />
    </div>
  );
}
