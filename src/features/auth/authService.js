import axios from "axios";

const API_URL = "http://localhost:8080/user";

const register = async (user) => {
  const response = await axios.post(`${API_URL}/create`, user);
  return response.data;
};

const login = async (user) =>{
    const respose = await axios.post(`${API_URL}/login`, user);
    if (respose.data) {
        localStorage.setItem("user", JSON.stringify(respose.data));
        localStorage.setItem("token", respose.data.token);
    }
    return respose.data;
    
}
const authService = {
  register,
  login
};

export default authService;
