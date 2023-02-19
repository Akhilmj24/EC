import { Rating } from "primereact/rating";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  orderSizeAdd,
  quantityDecrement,
  quantityIncrement,
  removeItem,
} from "../../redux/features/cartSilce/cartSlice";
import { baseUrlImage } from "../../utils/service/api";
import { formatCurrency } from "../../utils/service/formatCurrency";

export default function DisplayVerticalProduct(props) {
  const [rating, setRating] = useState(null);
  const dispatch = useDispatch();
  const [isSize, setisSize] = useState("");

  const orderSizeHandler = (id, size) => {
    setisSize(size);
    dispatch(orderSizeAdd([props._id,size]));
  };
  return (
    <div className="flex gap-5 relative">
      <div
        className={`md:top-2 md:right-1 absolute cursor-pointer${
          props.isRemove ? `top-1 right-0 ` : `-bottom-14 right-0 `
        }`}
      >
        {props.isRemove ? (
          <div
            className="text-2xl text-rose-400 cursor-pointer"
            onClick={() => dispatch(removeItem(props._id))}
          >
            <ion-icon name="trash"></ion-icon>
          </div>
        ) : null}
        {props.isOrder ? (
          <div>
            <h1 className="font-semibold text-lg">Delivered</h1>
            <p className="">On Sat, 7 Aug 2021</p>
          </div>
        ) : null}
      </div>
      <div className="w-[200px] h-[200px]">
        <img
          src={`${baseUrlImage}${props.images[0]}`}
          alt="cartImage"
          className="w-[100%] h-[100%] object-contain"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-2xl">{props.title}</h3>
        <div className="md:flex-row flex flex-col gap-3 ">
          <Rating
            value={rating}
            onChange={(e) => setRating(e.value)}
            cancel={false}
          />
          <p>385 Reviews</p>
        </div>
        <h3 className="text-xl">{formatCurrency(props.saleprice)}</h3>
        <div className="flex gap-3 my-3">
          <p
            onClick={() => orderSizeHandler(props._id, "S")}
            className={`${
              isSize === `S`
                ? `w-[25px] h-[25px] text-center bg-blueShade font-semibold rounded-[50%] cursor-pointer`
                : `cursor-pointer`
            }`}
          >
            S
          </p>
          <p
            onClick={() => orderSizeHandler(props._id, "M")}
            className={`${
              isSize === `M`
                ? `w-[25px] h-[25px] text-center bg-blueShade font-semibold rounded-[50%] cursor-pointer`
                : `cursor-pointer`
            }`}
          >
            M
          </p>
          <p
            onClick={() => orderSizeHandler(props._id, "L")}
            className={`${
              isSize === `L`
                ? `w-[25px] h-[25px] text-center bg-blueShade font-semibold rounded-[50%] cursor-pointer`
                : `cursor-pointer`
            }`}
          >
            L
          </p>
          <p
            onClick={() => orderSizeHandler(props._id, "XL")}
            className={`${
              isSize === `XL`
                ? `w-[25px] h-[25px] text-center bg-blueShade font-semibold rounded-[50%] cursor-pointer`
                : `cursor-pointer`
            }`}
          >
            XL
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <button onClick={() => dispatch(quantityDecrement(props._id))}>
            -
          </button>
          <p className="text-xl">{props.quantity}</p>
          <button onClick={() => dispatch(quantityIncrement(props._id))}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
