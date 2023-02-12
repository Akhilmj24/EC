import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiAuth, baseUrl } from "../../../utils/service/api";
import { postApi } from "../../../utils/service/axiosCall";

const initialState = {
  loading: false,
  user: [],
  error: "",
};

export const postLogin = createAsyncThunk("user/login", async (data) => {
  return postApi(data, apiAuth.login);
});
export const postRegistration = createAsyncThunk(
  "user/registration",
  async (data) => {
    return postApi(data, apiAuth.registration);
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    // For Login
    builder.addCase(postLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postLogin.fulfilled, (state, action) => {
      state.loading = false;
      //   state.user = action.payload;
      state.error = "";
      if (action.payload.status) {
        localStorage.setItem("user", JSON.stringify(action.payload));
      }else{
        
      }
    });
    builder.addCase(postLogin.rejected, (state, action) => {
      state.loading = false;
      state.user = [];
      state.error = action.error.message;
    });
    // For Registration
    builder.addCase(postRegistration.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postRegistration.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      //   localStorage.setItem("user", JSON.stringify(action.payload));
      console.log(action.payload.details);
    });
    builder.addCase(postRegistration.rejected, (state, action) => {
      state.loading = false;
      state.user = [];
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
