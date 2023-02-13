import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiAuth, baseUrl } from "../../../utils/service/api";
import { getApi, postApi } from "../../../utils/service/axiosCall";

const initialState = {
  loading: false,
  user: [],
  error: "",
};

export const getuser = createAsyncThunk("user/login", async () => {
  return getApi(apiAuth.getuser);
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
    builder.addCase(getuser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getuser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = "";
    });
    builder.addCase(getuser.rejected, (state, action) => {
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
