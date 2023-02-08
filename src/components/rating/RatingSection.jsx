import { Rating } from "primereact/rating";
import React, { useState } from "react";

export default function RatingSection() {
  const [rating, setRating] = useState("2");
  
  return (
    <>
      <h1 className="text-2xl">399 Reviews</h1>
      <div className="my-5 flex">
        <div className="md:w-[100px] md:h-[100px] h-[50px] w-[50px] rounded-[50%] mr-5 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1675458176024-b75ab10c248f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className=" w-[100%] h-[100%] object-cover "
          />
        </div>
        <div className="md:w-max w-[80%] ">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-2xl">Akhil</h2>
            <p>Verified Buyer</p>
          </div>
          <Rating
            value={rating}
            onChange={(e) => setRating(e.value)}
            cancel={false}
          />
          <div className="my-5">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
              voluptatem, dolor tempore vero nostrum blanditiis saepe vitae a
              quis doloremque.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
