import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { apiAuth } from "../../utils/service/api";
import { putApi } from "../../utils/service/axiosCall";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";

export default function ProfileEdit({ setisEditable }) {
  const user = useSelector((state) => state.user);
  const [formData, setformData] = useState({
    name: user?.user?.name,
    email: user?.user?.email,
    mobile: user?.user?.mobile,
    dob: user?.user?.dob,
    gender: user?.user?.gender,
    address: user?.user?.address,
  });
  console.log(formData);
  const handleChange = (prop) => (event) => {
    setformData({ ...formData, [prop]: event.target.value });
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    putApi(formData, apiAuth.update).then((res) => toast.success(res));
    setisEditable(false);
  };
  return (
    <div>
      <h1 className="text-2xl mb-5 underline">Edit Profile Details</h1>
      <form action="" onSubmit={(e) => handleUpdate(e)}>
        <dl>
          <dt>Full Name:</dt>
          <dd>
            <input
              type="text"
              value={formData.name}
              onChange={handleChange("name")}
            />
          </dd>
          <dt>Email ID :</dt>
          <dd>
            {" "}
            <input
              type="text"
              value={formData.email}
              onChange={handleChange("email")}
            />
          </dd>
          <dt>Mobile Number:</dt>
          <dd>
            <input
              type="text"
              value={formData.mobile}
              onChange={handleChange("mobile")}
            />
          </dd>
          <dt>Gender :</dt>
          <dd>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange("gender")}
              className="cursor-pointer"
            />
            <label className="mx-2">Male</label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange("gender")}
              className="cursor-pointer"
            />
            <label className="mx-2">Female</label>
            <input
              type="radio"
              name="gender"
              value="Other"
              onChange={handleChange("gender")}
              className="cursor-pointer"
            />
            <label className="mx-2">Other</label>
          </dd>
          <dt>Date of Birth :</dt>
          <dd>
            <input
              type="date"
              value={formData.dob}
              onChange={handleChange("dob")}
              placeholder="dd-mm-yyy"
              className=""
            />
          </dd>

          <dt>Address:</dt>
          <dd>
            {" "}
            <input
              type="text"
              value={formData.address}
              onChange={handleChange("address")}
            />
          </dd>
        </dl>
        <div className="my-5 flex gap-3">
          <button>Submit</button>
          <button onClick={() => setisEditable(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
