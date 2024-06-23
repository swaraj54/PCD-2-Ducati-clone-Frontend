import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import Api from "../../axiosConfig";
import { useNavigate } from "react-router-dom";

const ManageBike = () => {
  const router = useNavigate();
  const { state } = useContext(AuthContext);
  const [bikes, setBikes] = useState([]);

  async function GetAllAddedBikes() {
    try {
      const response = await Api.post("/admin/get-bikes", {
        userId: state.user.id,
      });
      if (response.data.success) {
        setBikes(response.data.bikes);
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  }
  function RedirectToEdit(id) {
    router(`/edit-bike/${id}`);
  }
  async function DeleteBike(bikeId) {
    try {
      const response = await Api.post("/admin/delete-bike", {
        userId: state.user.id,
        bikeId,
      });
      if (response.data.success) {
        toast.success(response.data.message);
        GetAllAddedBikes();
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  }
  useEffect(() => {
    if (state?.user?.id) {
      GetAllAddedBikes();
    }
  }, [state]);
  return (
    <div style={{ marginTop: "1000px" }}>
      <h1>Manage Bikes</h1>
      {bikes.length ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {bikes.map((bike) => (
            <div
              style={{
                border: "2px solid black",
                width: "60%",
                marginBottom: "60px",
                cursor: "pointer",
              }}
            >
              <img style={{ width: "100%" }} src={bike.sidePhoto} />
              <h2>Name : {bike.name}</h2>
              <h3>Description : {bike.description}</h3>
              <h3>Price : {bike.price}</h3>
              <h3>Stock : {bike.availableStock}</h3>
              <h2 onClick={() => RedirectToEdit(bike._id)}>Edit Bike ?</h2>
              <h2 onClick={() => DeleteBike(bike._id)}>Delete Bike ?</h2>
            </div>
          ))}
        </div>
      ) : (
        <h2>No bikes found.</h2>
      )}
    </div>
  );
};

export default ManageBike;
