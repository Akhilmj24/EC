import { Rating } from "primereact/rating";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  quantityDecrement,
  quantityIncrement,
  removeItem,
} from "../../redux/features/cartSilce/cartSlice";
export default function DisplayVerticalProduct(props) {
  const [rating, setRating] = useState(null);

  const dispatch = useDispatch();
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
          src={props.image}
          alt="cartImage"
          className="w-[100%] h-[100%] object-contain"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-2xl">{props.name}</h3>
        <div className="md:flex-row flex flex-col gap-3 ">
          <Rating
            value={rating}
            onChange={(e) => setRating(e.value)}
            cancel={false}
          />
          <p>385 Reviews</p>
        </div>
        <h3 className="text-xl">Rs {props.saleprice}.00</h3>
        <h2>Size: S</h2>
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
