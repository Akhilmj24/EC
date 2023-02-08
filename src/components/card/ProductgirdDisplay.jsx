import React from "react";

export default function ProductgirdDisplay() {
  return (
    <>
      <div class="md:px-12 md:mt-10 md:py-10 md:grid-cols-4 md:h-[600px] p-5 grid grid-rows-6 gap-3 h-[5] ">
        <div class="md:row-span-3 md:col-span-1 rounded col-span-3  overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z2l0bCUyMG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="productImage"
            className="w-[100%] h-[100%] object-cover"
          />
          <h1 className="absolute bottom-2 left-2 text-xl font-semibold text-white">
            Hello my data
          </h1>
        </div>
        <div class="md:row-span-3 md:col-span-1 rounded col-span-3  overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z2l0bCUyMG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="productImage"
            className="w-[100%] h-[100%] object-cover"
          />
          <h1 className="absolute bottom-2 left-2 text-xl font-semibold text-white">
            Hello my data
          </h1>
        </div>
        <div class="md:row-start-1 md:row-end-7 md:col-start-2 col-span-3 rounded overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z2l0bCUyMG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="productImage"
            className="w-[100%] h-[100%] object-cover"
          />
          <h1 className="md:bottom-[15%] md:-left-[5%] md:text-2xl md:-rotate-90 absolute bottom-2 left-2 text-xl font-semibold text-white ">
            Hello my data
          </h1>
        </div>
      </div>
    </>
  );
}
