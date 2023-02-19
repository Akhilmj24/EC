import React, { useEffect } from "react";
import { productItems } from "../../utils/data/Data";
import ProductCard from "../card/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/features/productSilce/productSlice";


export default function DisplayListProduct() {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, []);
  return (
    <div className="grid md:grid-cols-4 md:p-0 md:gap-5 grid-cols-2 gap-5 p-3  place-content-center">
      {products.map((item) => (
        <ProductCard {...item} type="display" />
      ))}
    </div>
  );
}
