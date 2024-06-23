import axios from "axios";

const Api = axios.create({
  baseURL: "https://pcd-2-ducati-clone-backend.onrender.com/api/v1",
});

export default Api;
