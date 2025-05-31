import axios from "axios";

const API_URL = "http://localhost:8080/task";

const createTask = async (task) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${API_URL}/create`, task, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating task:", error.response || error.message);
    throw error;
  }
};

const taskService = {
  createTask,
};

export default taskService;
