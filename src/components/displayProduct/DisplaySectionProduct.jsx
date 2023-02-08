import React from "react";
import { productItems } from "../../utils/data/Data";
import ProductCard from "../card/ProductCard";

export default function DisplaySectionProduct({ limit, orderType }) {
  // const newAdded = productItems.sort((a, b) => {
  //   return a._id - b._id;
  // });
  // const topSale = productItems.sort((a, b) => {
  //   return a.saleCount + b.saleCount;
  // });
  // console.log(topSale);
  // console.log(newAdded);
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 gap-5 p-3 md:p-0 md:px-12 md:gap-16 place-content-center">
      {productItems.slice(0, limit).map((item) => (
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
