import React, { useContext, useState } from "react";
import "./../styles/login.css";
import toast from "react-hot-toast";
import Api from "../axiosConfig";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const AdminLogin = () => {
  const { dispatch } = useContext(AuthContext);
  const router = useNavigate();
  const [adminData, setAdminData] = useState({ email: "", password: "" });
  const handleChange = (event) => {
    setAdminData({ ...adminData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (adminData.email && adminData.password) {
        const response = await Api.post("/auth/login-admin", {
          email: adminData.email,
          password: adminData.password,
        });
        if (response.data.success) {
          localStorage.setItem("token", response.data.token);
          dispatch({ type: "LOGIN", payload: response.data.userData });
          toast.success(response.data.message);
          router("/");
          setAdminData({ email: "", password: "" });
        }
      } else {
        toast.error("All fields are required.");
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  return (
    <div class="login-container">
      <div class="logo">
        <img src="./images/ducati-logo.png" alt="Ducati Logo" />
      </div>
      <form onSubmit={handleSubmit} class="login-form">
        <h1>Admin Login</h1>
        <div class="input-group">
          <input
            value={adminData.email}
            onChange={handleChange}
            placeholder="ADMIN E-MAIL"
            type="text"
            name="email"
            required
          />
        </div>
        <div class="input-group">
          <input
            value={adminData.password}
            onChange={handleChange}
            placeholder="ADMIN PASSWORD"
            type="password"
            name="password"
            required
          />
        </div>
        <div className="bottom">
          <p>Forgot Your Password?</p>
          <button type="submit">LOGIN</button>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
