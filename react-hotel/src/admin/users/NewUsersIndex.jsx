import React from "react";
import Cards from "../Cards/Cards";
//import DataTable from "../table/Table";
import NewUsers from "./NewUsers";
import "../maindash/maindash.css";
const MainDashUsers = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
      <NewUsers />
    </div>
  );
};

export default MainDashUsers;