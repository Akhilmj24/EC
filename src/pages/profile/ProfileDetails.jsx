import React from "react";
import { useSelector } from "react-redux";
import { styles } from "../../utils/style/style";

export default function ProfileDetails({ setisEditable }) {
  const user = useSelector((state) => state.user);
  
  return (
    <div>
      <div className="flex gap-3 items-end mb-5">
        <h1 className="text-2xl underline">Profile Details</h1>
        <p
          className={`${styles.transitionHover} text-lg cursor-pointer hover:text-xl`}
          onClick={() => setisEditable(true)}
        >
          Edit
        </p>
      </div>
      <dl>
        <dt>Full Name:</dt>
        <dd>{user?.user?.name}</dd>
        <dt>Email ID :</dt>
        <dd> {user?.user?.email}</dd>
        <dt>Mobile Number:</dt>
        <dd> {user?.user?.mobile}</dd>
        <dt>Gender:</dt>
        <dd> {user?.user?.gender}</dd>
        <dt>Date of Birth :</dt>
        <dd> {user?.user?.dob}</dd>
        <dt>Address:</dt>
        <dd> {user?.user?.address}</dd>
      </dl>
    </div>
  );
}
