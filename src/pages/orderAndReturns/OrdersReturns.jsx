import React from "react";
import DisplayVerticalProduct from "../../components/displayProduct/DisplayVerticalProduct";
import { productItems } from "../../utils/data/Data";
export default function OrdersReturns() {
  return (
    <div>
      <h1 className="text-2xl mb-7 underline">Orders & Returns</h1>
      <div className="md:gap-4 flex flex-col  gap-28">
        {productItems.splice(0, 2).map((item) => (
          <DisplayVerticalProduct isOrder={true} {...item} />
        ))}
      </div>
    </div>
  );
}
