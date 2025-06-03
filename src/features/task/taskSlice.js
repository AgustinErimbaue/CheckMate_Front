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

export const getTasksUser = createAsyncThunk("auth/getTasksUser", async () => {
  try {
    return await taskService.getTasksUser();
  } catch (error) {
    console.error("Error fetching user tasks:", error);
    throw new Error("Failed to fetch user tasks");
  }
});

export const updateTask = createAsyncThunk(
  "task/updateTask",
  async ({ taskId, task }, { rejectWithValue }) => {
    try {
      return await taskService.updateTask(taskId, task);
    } catch (error) {
      console.error("Error updating task:", error);
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
      })
      .addCase(getTasksUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getTasksUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tasks = action.payload; 
      })
      .addCase(getTasksUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(updateTask.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.tasks.findIndex(task => task.id === action.payload.id);
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      })
      .addCase(updateTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default taskSlice.reducer;
