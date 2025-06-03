import axios from "axios";

const API_URL = "https://checkmate-back.onrender.com/user";

const register = async (user) => {
  const response = await axios.post(`${API_URL}/create`, user);
  return response.data;
};

const login = async (user) => {
  const respose = await axios.post(`${API_URL}/login`, user);
  if (respose.data) {
    localStorage.setItem("user", JSON.stringify(respose.data));
    localStorage.setItem("token", respose.data.token);
  }
  return respose.data;
};

const logout = async () => {
  const token = localStorage.getItem("token");
  const res = await axios.delete(API_URL + "/logout", {
    headers: {
      Authorization: token,
    },
  });
  if (res.data) {
    localStorage.clear();
  }
  return res.data;
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
