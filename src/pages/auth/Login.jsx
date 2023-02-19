import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { error } from "../../utils/service/error";
import { styles } from "../../utils/style/style";
import { handlelogin } from "./auth";
import { useNavigate } from "react-router-dom";
import { isvalid } from "../../utils/service/validationCheck";
import { useDispatch, useSelector } from "react-redux";
import { getuser } from "../../redux/features/userSilce/userSlice";

export default function Login() {
  const [email, setEmail] = useState("akhil@ecommerce.com");
  const [password, setPassword] = useState("123456");
  const navigate = useNavigate();
  

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      error("Please enter email id");
    } else if (!email.match(isvalid.Email)) {
      error("Please enter a vaild email id");
    } else if (password.trim() === "") {
      error("Please enter password");
    } else {
      const data = {
        email: email,
        password: password,
      };

      handlelogin(data).then((res) => {
        if (res.status) {
          sessionStorage.setItem("user", JSON.stringify(res));
          navigate("/");
          window.location.reload(false);
        } else {
          error(res.message);
        }
      });
    }
  };
  return (
    <div className="bg-white w-screen h-screen flex justify-center items-center">
      <form
        action=""
        className="p-10 bg-white md:w-[30%] rounded-2xl shadow"
        onSubmit={(e) => handleLoginSubmit(e)}
      >
        <div className="text-center mb-5">
          <h1 className="text-3xl font-semibold text-black">Welcome back</h1>
          <p className="text-sm text-gryShade">Please enter your details!</p>
        </div>
        <div className="flex flex-col gap-1 mb-2">
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="Enter your email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1 mb-2">
          <label htmlFor="">Password</label>
          <input
            type="text"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
