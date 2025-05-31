import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import taskService from "./taskService";

const initialState = {
  tasks: [],
  isLoading: false,
  error: null,
};

export const createTask = createAsyncThunk(
  "task/createTask",
  async (task, { rejectWithValue }) => {
    try {
      return await taskService.createTask(task);
    } catch (error) {
      console.error("Error creating task:", error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    reset: (state) => {
      state.tasks = [];
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTask.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tasks.push(action.payload);
      })
      .addCase(createTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default taskSlice.reducer;