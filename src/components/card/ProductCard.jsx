import React from "react";
import { Link } from "react-router-dom";
import { baseUrlImage } from "../../utils/service/api";
import { formatCurrency } from "../../utils/service/formatCurrency";

export default function ProductCard(props) {
  return (
    <>
      <Link to={`/productview/${props._id}`}>
        <div
          className={`${
            props.type === "display" ? `text-center` : `text-start`
          }w-full  cursor-pointer`}
        >
          <img
            src={`${baseUrlImage}${props.images[0]}`}
            alt="dpImage"
            className={`h-[${
              props.type === "display" ? `380px` : `200px`
            }] w-[100%] object-cover`}
          />
          <h1 className="text-xl my-2">{props.title}</h1>
          <p className="text-base">{formatCurrency(props.orginalprice)}</p>
        </div>
      </Link>
    </>
  );
}
