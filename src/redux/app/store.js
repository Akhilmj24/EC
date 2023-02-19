import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSilce/userSlice";
import cartReducer from "../features/cartSilce/cartSlice";
import productReducer from "../features/productSilce/productSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    product:productReducer,
    cart:cartReducer,
  },
});
