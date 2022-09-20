import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useContext } from "react";

import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import AdminIndex from "./admin/AdminIndex";
import AdminHotelsIndex from "./admin/AdminHotelsIndex";
import AdminRoomsIndex from "./admin/AdminRoomsIndex";

import IndexUsers from "./admin/users/Index";
import IndexHotels from "./admin/hotels/Index";
import IndexRooms from "./admin/rooms/Index";
import { AuthContext } from "./context/AuthContext";



function App() {
  const { user } = useContext(AuthContext);
  const admin=user && user[0].isAdmin;
   
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/login" element={!user ? <Login /> : <Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={!admin === true ? <Login /> : <AdminIndex />} />
        <Route path="/admin/dashboard" element={!admin === true ? <Login /> : <AdminIndex />} />
        <Route path="/admin/users" element={!admin === true ? <Login /> : <AdminIndex />} />
        <Route path="/admin/hotels" element={!admin === true ? <Login /> : <AdminHotelsIndex />} />
        <Route path="/admin/rooms" element={!admin === true ? <Login /> : <AdminRoomsIndex />} />
        <Route path="/admin/users/new" element={!admin === true ? <Login /> : <IndexUsers />} />
        <Route path="/admin/hotels/new" element={!admin === true ? <Login /> : <IndexHotels />} />
        <Route path="/admin/rooms/new" element={!admin === true ? <Login /> : <IndexRooms />} />

        <Route path="/hotels/find/:id" element={!user ? <Login /> : <Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;