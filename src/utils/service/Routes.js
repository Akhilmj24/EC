import Login from "../../pages/auth/Login";
import Signup from "../../pages/auth/Signup ";
import Cart from "../../pages/cart/Cart";
import Home from "../../pages/home/Home";
import ProductList from "../../pages/product/ProductList";
import ProductView from "../../pages/product/ProductView";
import Profile from "../../pages/profile/Profile";
import ProfileEdit from "../../pages/profile/ProfileEdit";

export const routes = [
  {
    layout: "pages",
    pages: [
      {
        name: "home",
        path: "/",
        element: <Home />,
        isPrivate: false,
      },
      {
        name: "home",
        path: "/*",
        element: <Home />,
        isPrivate: false,
      },
      {
        name: "profile",
        path: "/profile/:id",
        element: <Profile />,
        isPrivate: true,
      },
      {
        name: "productlist",
        path: "/productlist",
        element: <ProductList />,
        isPrivate: false,
      },
      {
        name: "productview",
        path: "/productview/:id",
        element: <ProductView />,
        isPrivate: false,
      },
      {
        name: "productview",
        path: "/cart",
        element: <Cart />,
        isPrivate: true,
      },
      {
        name: "profiledeatils",
        path: "/profiledeatils",
        element: <ProfileEdit />,
        isPrivate: true,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        name: "sign in",
        path: "/signin",
        element: <Login />,
      },
      {
        name: "sign in",
        path: "/*",
        element: <Login />,
      },
      {
        name: "sign up",
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
];
