import React from "react";
import Footer from "./Footer";
import NavBar from "./navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import { routes } from "../utils/service/Routes";
import PrivateRoute from "../utils/service/PrivateRoute";

export default function Layout() {
  
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
