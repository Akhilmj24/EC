import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DisplayVerticalProduct from "../../components/displayProduct/DisplayVerticalProduct";
import Header from "../../components/header/Header";
import { styles } from "../../utils/style/style";
import Subtotal from "./Subtotal";

export default function Cart() {
  const products = useSelector((state) => state.cart.products);

  return (
    <div className={`${styles.innerpagepaddings}`}>
      <Header text={"Shopping Cart"} isMainHeading={false} postion={"37"} />
      <div className="md:flex-row flex flex-col-reverse gap-4 p-3">
        <div
          className={` md:m-0 mt-5 flex gap-3 flex-col ${
            products.length > 0 ? `md:border-r-2 md:w-[75%]` : `md:w-[100%]`
          }`}
        >
          {products.length > 0 ? (
            products.map((product) => (
              <DisplayVerticalProduct isRemove={true} {...product} />
            ))
          ) : (
            <div className="flex justify-center items-center mt-10 flex-col gap-3">
              <h1 className="text-6xl">Cart is empty!</h1>
              <Link to="/productlist" className="text-xl my-5 ">
                <button>Continue Purchases</button>
              </Link>
            </div>
          )}
        </div>
        {products.length > 0 ? (
          <div>
            <Subtotal />
          </div>
        ) : null}
      </div>
    </div>
  );
}
