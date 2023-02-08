import React from "react";
import { Link } from "react-router-dom";


export default function ProductCard(props) {
  // console.log("test",props)

  return (
    <>
      <Link to={`/productview/${props._id}`}>
        <div className={`${props.type === 'display'?`text-center`:`text-start`}w-full  cursor-pointer`}>
          <img
            src={props.image}
            alt="dpImage"
            // className="h-[380px] w-[100%] object-cover"
            className={`h-[${props.type === 'display'?`380px`:`200px`}] w-[100%] object-cover`}
          />
          <h1 className="text-xl my-2">{props.name}</h1>
          <p className="text-base">RS {props.orginalprice}.00</p>
        </div>
      </Link>
    </>
  );
}
