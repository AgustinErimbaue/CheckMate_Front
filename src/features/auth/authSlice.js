import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const incialState = {
  user: null,
  token: "",
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (user) => {
    try {
        return await authService.register(user);
    } catch (error) {
        console.error("Error during registration:", error);
        throw new Error("Registration failed");
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: incialState,
  reducers: {
    reset: (state) => {
      state.user = null;
      state.token = "";
    },
  },
});

export default authSlice.reducer;
