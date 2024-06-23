import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import Api from "../../axiosConfig";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AddBike = () => {
  const router = useNavigate();
  const { state } = useContext(AuthContext);
  const [bikeData, setBikeData] = useState({
    name: "",
    description: "",
    price: "",
    availableStock: "",
    mainPhoto: "",
    sidePhoto: "",
    extraPhoto1: "",
    extraPhoto2: "",
    extraPhoto3: "",
    extraPhoto4: "",
    extraPhoto5: "",
    extraPhoto6: "",
  });

  const handleChange = (event) => {
    setBikeData({ ...bikeData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await Api.post("/admin/add-bike", {
        name: bikeData.name,
        description: bikeData.description,
        price: bikeData.price,
        availableStock: bikeData.availableStock,
        mainPhoto: bikeData.mainPhoto,
        sidePhoto: bikeData.sidePhoto,
        extraPhoto1: bikeData.extraPhoto1,
        extraPhoto2: bikeData.extraPhoto2,
        extraPhoto3: bikeData.extraPhoto3,
        extraPhoto4: bikeData.extraPhoto4,
        extraPhoto5: bikeData.extraPhoto5,
        extraPhoto6: bikeData.extraPhoto6,
        userId: state.user.id,
      });
      if (response.data.success) {
        toast.success(response.data.message);
        router("/manage-bike");
        setBikeData({
          name: "",
          description: "",
          price: "",
          availableStock: "",
          mainPhoto: "",
          sidePhoto: "",
          extraPhoto1: "",
          extraPhoto2: "",
          extraPhoto3: "",
          extraPhoto4: "",
          extraPhoto5: "",
          extraPhoto6: "",
        });
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  return (
    <div class="login-container" style={{ marginTop: "1200px" }}>
      <div class="logo">
        <img src="./images/ducati-logo.png" alt="Ducati Logo" />
      </div>
      <form onSubmit={handleSubmit} class="login-form">
        <h1>Add Bike</h1>
        <div class="input-group">
          <input
            onChange={handleChange}
            placeholder="BIKE NAME"
            type="text"
            name="name"
            required
            value={bikeData.name}
          />
        </div>
        <div class="input-group">
          <input
            onChange={handleChange}
            placeholder="DESCRIPTION"
            type="text"
            name="description"
            required
            value={bikeData.description}
          />
        </div>
        <div class="input-group">
          <input
            onChange={handleChange}
            placeholder="PRICE"
            type="number"
            name="price"
            required
            value={bikeData.price}
          />
        </div>
        <div class="input-group">
          <input
            onChange={handleChange}
            placeholder="STOCK"
            type="number"
            name="availableStock"
            required
            value={bikeData.availableStock}
          />
        </div>
        <div class="input-group">
          <input
            onChange={handleChange}
            placeholder="MAIN PHOTO"
            type="url"
            name="mainPhoto"
            required
            value={bikeData.mainPhoto}
          />
        </div>

        <div class="input-group">
          <input
            onChange={handleChange}
            placeholder="SIDE PHOTO"
            type="url"
            name="sidePhoto"
            required
            value={bikeData.sidePhoto}
          />
        </div>
        <div class="input-group">
          <input
            onChange={handleChange}
            placeholder="EXTRA PHOTO 1"
            type="url"
            name="extraPhoto1"
            required
            value={bikeData.extraPhoto1}
          />
        </div>
        <div class="input-group">
          <input
            onChange={handleChange}
            placeholder="EXTRA PHOTO 2"
            type="url"
            name="extraPhoto2"
            required
            value={bikeData.extraPhoto2}
          />
        </div>
        <div class="input-group">
          <input
            onChange={handleChange}
            placeholder="EXTRA PHOTO 3"
            type="url"
            name="extraPhoto3"
            required
            value={bikeData.extraPhoto3}
          />
        </div>
        <div class="input-group">
          <input
            onChange={handleChange}
            placeholder="EXTRA PHOTO 4"
            type="url"
            name="extraPhoto4"
            required
            value={bikeData.extraPhoto4}
          />
        </div>
        <div class="input-group">
          <input
            onChange={handleChange}
            placeholder="EXTRA PHOTO 5"
            type="url"
            name="extraPhoto5"
            required
            value={bikeData.extraPhoto5}
          />
        </div>
        <div class="input-group">
          <input
            onChange={handleChange}
            placeholder="EXTRA PHOTO 6"
            type="url"
            name="extraPhoto6"
            required
            value={bikeData.extraPhoto6}
          />
        </div>
        <div className="bottom">
          <p></p>
          <button type="submit">ADD BIKE</button>
        </div>
      </form>
    </div>
  );
};

export default AddBike;
