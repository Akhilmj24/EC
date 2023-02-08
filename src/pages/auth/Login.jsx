import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../../utils/style/style";
export default function Login() {
  return (
    <div className="bg-white w-screen h-screen flex justify-center items-center">
      <form action="" className="p-10 bg-white md:w-[30%] rounded-2xl shadow">
        <div className="text-center mb-5">
          <h1 className="text-3xl font-semibold text-black">Welcome back</h1>
          <p className="text-sm text-gryShade">Please enter your details!</p>
        </div>
        <div className="flex flex-col gap-1 mb-2">
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Enter your email id" />
        </div>
        <div className="flex flex-col gap-1 mb-2">
          <label htmlFor="">Password</label>
          <input type="text" placeholder="Enter your Password" />
        </div>
        <div className="text-right my-3">
          <p className="text-xs cursor-pointer">Forgot Password?</p>
        </div>
        <div className="text-center my-5">
          <button className="py-1">Sign in</button>
        </div>
        <div>
          <p className="text-xs text-center">
            Don't have account?
            <Link
              to="/auth/signup"
              className={`${styles.transitionNav}  ml-1 text-base hover:underline`}
            >
              Signup for free
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
