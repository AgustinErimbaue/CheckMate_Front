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

const getTasksUser = async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${API_URL}/tasks/`, {
    headers: {
      Authorization: token,
    },
  });
  return response.data;
}

const updateTask = async (taskId, task) => {
  const token = localStorage.getItem("token");
  const response = await axios.put(`${API_URL}/update/${taskId}`, task, {
    headers: {
      Authorization: token,
    },
  });
  return response.data;
};  

const taskService = {
  createTask,
  getTasksUser,
  updateTask
};

export default taskService;
