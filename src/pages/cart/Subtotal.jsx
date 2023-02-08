import React from "react";

export default function Subtotal() {
  return (
    <div className="md:border-0 md:p-0 py-5  border-y-2 border-gray-600 stickyConatiner">
      <div className="">
        <div className="flex justify-between items-end">
          <h1 className="text-2xl">Subtotal</h1>
          <p>Rs 2563.00</p>
        </div>
        <p className="my-10">Tax included. Shipping calculated at checkout.</p>
        <div className="text-center">
          <button>Checkout</button>
        </div>
      </div>
      <div className="my-5">
        <h1 className="text-2xl">Select Delivery Address</h1>
        <div className="flex gap-3 items-start my-5">
          <div className="cursor-pointer">
            <input type="radio" name="" id="" />
          </div>
          <div>
            <h2 className="text-lg font-semibold tracking-wider">Akhil</h2>
            <p>
              SVRA-29 Santhivila Near SBI ATM, Nemom P.O, TVM, Kerala - 695020
            </p>
            <p>Home</p>
            <p>7736570852</p>
          </div>
        </div>
        <div className="text-end">
          <p className="text-blue-600 cursor-pointer">Choose another address</p>
        </div>
      </div>
    </div>
  );
}
