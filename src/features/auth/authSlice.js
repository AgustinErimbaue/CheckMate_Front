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

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (user) => {
    try {
      return await authService.login(user);
    } catch (error) {
      console.error("Error during login:", error);
      throw new Error("Login failed");
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
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.user = null;
        state.token = "";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state) => {
        state.user = null;
        state.token = "";
      })
      .addCase(registerUser.pending, (state) => {
        state.user = null;
        state.token = "";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
      })
      .addCase(registerUser.rejected, (state) => {
        state.user = null;
        state.token = "";
      });
  }
});

export default authSlice.reducer;
