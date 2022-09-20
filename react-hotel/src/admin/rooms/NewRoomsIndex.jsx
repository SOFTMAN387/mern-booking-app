import React from "react";
import Cards from "../Cards/Cards";
//import DataTable from "../table/Table";
import NewRooms from "./NewRooms";
import "../maindash/maindash.css";
const MainDashRooms = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
      <NewRooms />
    </div>
  );
};

export default MainDashRooms;