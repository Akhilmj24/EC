import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import NavBar from "./navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import { routes } from "../utils/service/Routes";
import PrivateRoute from "../utils/service/PrivateRoute";

import { useDispatch, useSelector } from "react-redux";
import { getuser } from "../redux/features/userSilce/userSlice";
import { putApi } from "../utils/service/axiosCall";
import { apiAuth } from "../utils/service/api";

export default function Layout() {
  const userinfo = JSON.parse(sessionStorage.getItem("user"));
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (userinfo?.details?._id) {
      dispatch(getuser());
    }
  }, []);

  const products = useSelector((state) => state.cart.products);
  useEffect(() => {
    if (products.length > 0) {
      console.log(products);

      const data = {
        cart: products,
      };
      putApi(data, apiAuth.updatecart).then((res) => console.log("first"));
    }
  }, [products]);

  return (
    <>
      <NavBar />

      <Routes>
        {routes.map(
          ({ layout, pages }) =>
            layout === "pages" &&
            pages.map(({ path, element, isPrivate }) =>
              isPrivate ? (
                <Route element={<PrivateRoute />} key={element}>
                  <Route exact path={path} element={element} />
                </Route>
              ) : (
                <Route exact path={path} element={element} key={element} />
              )
            )
        )}
      </Routes>
      <Footer />
    </>
  );
}
