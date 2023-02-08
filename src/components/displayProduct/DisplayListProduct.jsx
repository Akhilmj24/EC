import React from "react";
import { productItems } from "../../utils/data/Data";
import ProductCard from "../card/ProductCard";

export default function DisplayListProduct() {
  return (
    <div className="grid md:grid-cols-4 md:p-0 md:gap-5 grid-cols-2 gap-5 p-3  place-content-center">
      {productItems.map((item) => (
        <ProductCard {...item} type="display" />
      ))}
    </div>
  );
}
