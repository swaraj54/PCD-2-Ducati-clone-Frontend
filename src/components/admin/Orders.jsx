import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Api from "../../axiosConfig";
import toast from "react-hot-toast";

const Orders = () => {
  const router = useNavigate();
  const { state } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  console.log(orders, "orders");
  async function GetAllOrders() {
    try {
      const response = await Api.post("/admin/get-orders", {
        userId: state.user.id,
      });
      if (response.data.success) {
        setOrders(response.data.allOrders);
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  }
  useEffect(() => {
    if (state?.user?.id) {
      GetAllOrders();
    }
  }, [state]);
  return (
    <div>
      <h1>Orders</h1>
      {orders.length ? (
        <div>
          {orders.map((order) => (
            <div style={{ border: "2px solid black", marginBottom: "20px" }}>
              <h2>User : {order.user.name}</h2>
              <h2>Paid Amount : {order.paidAmount}/-</h2>
              {order.purchasedbikes.map((bike, i) => (
                <h2>
                  Bike : {i + 1}. {bike.name}
                </h2>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <h1>No orders found.</h1>
      )}
    </div>
  );
};

export default Orders;
