import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Bike from "./components/Bike";
import ContactForm from "./components/ContactForm";
import Preowned from "./components/Preowned";
import RidingAcademy from "./components/RidingAcademy";
import Shop from "./components/Shop";
import AllBikes from "./components/AllBikes";
import Register from "./components/Register";
import AdminLogin from "./components/AdminLogin";
import Login from "./components/Login";
import withTitle from "./components/withTitle";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import PurchaseHistory from "./components/PurchaseHistory";
import AddBike from "./components/admin/AddBike";
import ManageBike from "./components/admin/ManageBike";
import Orders from "./components/admin/Orders";
import EditBike from "./components/admin/EditBike";

const HomeWithTitle = withTitle(HomePage, "Home - Ducati");
const LoginWithTitle = withTitle(Login, "Login");
const AdminLoginWithTitle = withTitle(AdminLogin, "Admin Login");
const RegisterWithTitle = withTitle(Register, "Register");

function App() {
  return (
    <div className="App">
      {/* Create Navbar here  */}
      <Routes>
        <Route path="/" element={<HomeWithTitle />} />
        <Route path="/all-bikes" element={<AllBikes />} />
        <Route path="/bike/:id" element={<Bike />} />

        <Route path="/contact" element={<ContactForm />} />
        <Route path="/preowned" element={<Preowned />} />
        <Route path="/riding-academy" element={<RidingAcademy />} />
        <Route path="/shop" element={<Shop />} />

        <Route path="/login" element={<LoginWithTitle />} />
        <Route path="/login/:bikeId" element={<LoginWithTitle />} />
        <Route path="/login-admin" element={<AdminLoginWithTitle />} />
        <Route path="/register" element={<RegisterWithTitle />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/purchase-history" element={<PurchaseHistory />} />

        <Route path="/add-bike" element={<AddBike />} />
        <Route path="/manage-bike" element={<ManageBike />} />
        <Route path="/edit-bike/:bikeId" element={<EditBike />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
}

export default App;
