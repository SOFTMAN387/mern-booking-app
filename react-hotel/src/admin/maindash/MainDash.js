import React from "react";
import Cards from "../Cards/Cards";
import DataTable from "../table/Table";
import "./maindash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
      <DataTable />
    </div>
  );
};

export default MainDash;