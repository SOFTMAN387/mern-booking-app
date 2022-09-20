import React from "react";
import Cards from "../Cards/Cards";
//import DataTable from "../table/Table";
import NewHotels from "./NewHotels";
import "../maindash/maindash.css";
const MainDashHotels = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
      <NewHotels />
    </div>
  );
};

export default MainDashHotels;