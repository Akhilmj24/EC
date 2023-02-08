import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSilce/userSlice";
import cartReducer from "../features/cartSilce/cartSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart:cartReducer
  },
});
