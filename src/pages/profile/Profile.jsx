import React, { useState } from "react";
import { styles } from "../../utils/style/style";
import OrdersReturns from "../orderAndReturns/OrdersReturns";
import ProfileDetails from "./ProfileDetails";
import { profileMenu } from "./profileMenus";

export default function Profile() {
  const [selectedMenu, setselectedMenu] = useState("profile");
  return (
    <div className={`${styles.innerpagepaddings} flex md:flex-row flex-col`}>
      <div className="md:w-[20%]">
        <div className="md:py-10 stickyConatiner">
          <ul className="md:flex-col flex gap-5">
            {profileMenu.map(({ menuName, icon, index, path }) => (
              <li
                className="md:text-xl cursor-pointer flex gap-3 items-center text-base "
                key={index}
                onClick={() => setselectedMenu(path)}
              >
                <ion-icon name={icon}></ion-icon>
                {menuName}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="md:w-[80%] md:p-10 py-5 md:text-2xl text-sm ">
        {selectedMenu === "profile" ? (
          <ProfileDetails />
        ) : selectedMenu === "ordersReturns" ? (
          <OrdersReturns />
        ) : null}
      </div>
    </div>
  );
}
