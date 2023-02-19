import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiAuth, apiProduct, baseUrl } from "../../../utils/service/api";
import { getApi, postApi } from "../../../utils/service/axiosCall";

const initialState = {
  loading: false,
  products: [],
  product: {},
  error: "",
};

export const getProduct = createAsyncThunk("product/get", async () => {
  return getApi(apiProduct.getproduct);
});
export const getProductbyid = createAsyncThunk("product/getbyid", async (id) => {
  return getApi(`${apiProduct.getproductbyid}${id}`);
});


const productSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    // For Login
    builder.addCase(getProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = "";
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
    // For Registration
    builder.addCase(getProductbyid.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductbyid.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.product = action.payload;
      
    });
    builder.addCase(getProductbyid.rejected, (state, action) => {
      state.loading = false;
      state.product = [];
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
