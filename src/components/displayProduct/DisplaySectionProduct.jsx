import React, { useEffect } from "react";
import { productItems } from "../../utils/data/Data";
import ProductCard from "../card/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/features/productSilce/productSlice";

export default function DisplaySectionProduct({ limit, orderType }) {
 
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, []);
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 gap-5 p-3 md:p-0 md:px-12 md:gap-16 place-content-center">
      {products?.slice(0, limit)?.map((item) => (
        <ProductCard {...item} type="display" />
      ))}
      {/* {Math.max(
        productItems
          .slice(0, limit)
          .map((item) => <ProductCard {...item} type="display" />)
      )} */}
      {/* {productItems.slice(0, limit).map((item) => (
        <ProductCard {...item} type="display" />
      ))} */}
    </div>
  );
}
