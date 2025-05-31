import { configureStore } from "@reduxjs/toolkit";
import auth from "../features/auth/authSlice";
import task from "../features/task/taskSlice";

export const store = configureStore({
  reducer: {
    auth,
    task,
  },
});
