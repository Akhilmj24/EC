import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { categoryLink, menusLinkuser0, menusLinkuser1 } from "./navMenu";
import "./nav.scss";
import { Link } from "react-router-dom";
import useHeaderColor from "../../utils/hooks/useHeaderColor";
import { styles } from "../../utils/style/style";

export default function NavBar() {
  const userinfo = JSON.parse(sessionStorage.getItem("user"));
  const [ismenuOpen, setismenuOpen] = useState(false);
  const [menusLink, setmenusLink] = useState([]);
  const [isuser, setisuser] = useState(userinfo ? true : false);
  const headerColor = useHeaderColor();
  const products = useSelector((state) => state.cart.products);
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    if (isuser) {
      setmenusLink(menusLinkuser1);
    } else {
      setmenusLink(menusLinkuser0);
    }
  }, [isuser]);
  const menutypeHandler = (menu) => {
    if (menu === "Logout") {
      sessionStorage.clear();
      setisuser(false);
      window.location.reload(false);
    }
  };
  return (
    <div className="fixed top-0 left-0 z-[500] w-full ">
      <header
        className={`${styles.transitionNav} w-full h-16 flex justify-evenly  md:gap-30 gap-10 items-center `}
        style={{ background: headerColor }}
      >
        <div className="text-4xl">
          <Link to="/">Logo</Link>
        </div>
        <div className="text-2xl">
          <ul className="flex gap-4 items-center">
            {menusLink.map(({ icon, path, menuName, index }) => (
              <li
                className="cursor-pointer text-xl md:text-2xl text-gryShade"
                key={index}
                onClick={() => menutypeHandler(menuName)}
              >
                <Link to={path} key={index}>
                  <span
                    title={menuName}
                    className="flex relative z-30 items-center"
                  >
                    <ion-icon name={icon} title={false}></ion-icon>

                    {menuName === "Cart" ? (
                      products.length > 0 ? (
                        <div className="absolute top-0 -right-1 z-40 w-[15px] h-[15px]  rounded-[50%] text-xs text-center text-black font-semibold bg-blueShade"></div>
                      ) : null
                    ) : null}
                    {menuName === "Login" ? (
                      <p className="text-base ml-2">Login</p>
                    ) : null}
                  </span>
                </Link>
              </li>
            ))}
            {userinfo ? (
              <small className="font-medium text-base text-black ">
                Hi, {user?.name}
              </small>
            ):null}
          </ul>
        </div>
      </header>
      <nav
        className={`${styles.transitionNav} w-full h-14  relative flex md:justify-center items-center`}
        style={{ background: headerColor }}
      >
        <div
          className="gap-4 cursor-pointer text-end pr-5 w-full md:hidden text-4xl relative z-30"
          onClick={() => setismenuOpen(!ismenuOpen)}
        >
          <ion-icon name={`${ismenuOpen ? `close` : `menu`}`}></ion-icon>
        </div>
        <ul
          className={`${styles.transitionNav} gap-4  md:flex   ${
            ismenuOpen
              ? `absolute bg-white px-10 py-1 left-0 top-[100%] opacity-100 md:relative md:left-0 md:top-0 w-full`
              : `hidden opacity-0 md:opacity-100`
          } `}
          // style={{ background: ismenuOpen ? headerColor : null }}
        >
          {categoryLink.map(({ menuName, path, index }) => (
            <li
              key={index}
              className={`${styles.transitionHover}  my-3 md:my-0 md:text-base font-semibold tracking-wider hover:text-[18px]`}
            >
              <Link to={path} key={index}>
                {menuName}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
