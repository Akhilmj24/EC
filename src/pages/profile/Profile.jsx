import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { styles } from "../../utils/style/style";
import OrdersReturns from "../orderAndReturns/OrdersReturns";
import ProfileDetails from "./ProfileDetails";
import { profileMenu } from "./profileData";
import ProfileEdit from "./ProfileEdit";
import { useDispatch } from "react-redux";
import { getuser } from "../../redux/features/userSilce/userSlice";

export default function Profile() {
  const [isEditable, setisEditable] = useState(false);
  let { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getuser());
  }, [isEditable]);

  return (
    <div className={`${styles.innerpagepaddings} flex md:flex-row flex-col`}>
      <div className="md:w-[20%]">
        <div className="md:py-10 stickyConatiner">
          <ul className="md:flex-col flex gap-5">
            {profileMenu.map(({ menuName, icon, index, path }) => (
              <Link to={`/profile/${path}`} key={index}>
                <li
                  className="md:text-xl cursor-pointer flex gap-3 items-center text-base "
                  key={index}
                >
                  <ion-icon name={icon}></ion-icon>
                  {menuName}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>

      <div className="md:w-[80%] md:p-10 py-5 md:text-2xl text-sm ">
        {id === "profiledetails" ? (
          <>
            {isEditable ? (
              <ProfileEdit setisEditable={setisEditable} />
            ) : (
              <ProfileDetails setisEditable={setisEditable} />
            )}
          </>
        ) : id === "ordersreturns" ? (
          <OrdersReturns />
        ) : null}
      </div>
    </div>
  );
}
