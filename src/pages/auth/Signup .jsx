import React, { useState } from "react";
import { Link } from "react-router-dom";
import { error } from "../../utils/service/error";
import { styles } from "../../utils/style/style";
import { useNavigate } from "react-router-dom";
import { handleRegister } from "./auth";
import { isvalid } from "../../utils/service/validationCheck";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const navigate = useNavigate();
  
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      error("Please enter name");
    } else if (!name.match(isvalid.Name)) {
      error("Please enter a vaild name");
    } else if (email.trim() === "") {
      error("Please enter email id");
    } else if (!email.match(isvalid.Email)) {
      error("Please enter a vaild email id");
    } else if (password.trim() === "") {
      error("Please enter password");
    } else if (password.trim() !== confirmpassword.trim()) {
      error("Passwords do not match");
    } else {
      const data = {
        email: email,
        password: password,
      };
      handleRegister(data).then((res) => {
        if (res.status) {
          sessionStorage.setItem("user", JSON.stringify(res));
          navigate("/");
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
        onSubmit={(e) => handleRegisterSubmit(e)}
      >
        <div className="text-center mb-5">
          <h1 className="text-3xl font-semibold text-black">Get started</h1>
          <p className="text-sm text-gryShade">Please enter your details!</p>
        </div>
        <div className="flex flex-col gap-1 mb-2">
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1 mb-2">
          <label htmlFor="">Confirm password</label>
          <input
            type="password"
            placeholder="Enter your Password"
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
        </div>
        <div className="text-center my-5">
          <button className="py-1">Sign Up</button>
        </div>
        <div>
          <p className="text-xs text-center">
            Already have an account?
            <Link
              to="/auth/signin"
              className={`${styles.transitionNav}  ml-1 text-base hover:underline`}
            >
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
