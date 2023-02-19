import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload
      );
      
    },
    quantityIncrement: (state,action) => {
      const item = state.products.find(item=>item._id === action.payload)
      if(item){
        item.quantity += 1
      }
    },
    quantityDecrement: (state,action) => {
      const item = state.products.find(item=>item._id === action.payload)
      if(item){
        item.quantity -= 1
      }
    },
    orderSizeAdd: (state,action) => {
      const item = state.products.find(item=>item._id === action.payload[0])
      if(item){
        item.ordersize = action.payload[1]
      }
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

export const { addtoCart,removeItem, resetCart,quantityIncrement,quantityDecrement,orderSizeAdd } = cartSlice.actions;

export default cartSlice.reducer;
