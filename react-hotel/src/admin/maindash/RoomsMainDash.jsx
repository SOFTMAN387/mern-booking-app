import React from "react";
import Cards from "../Cards/Cards";
import DataTable from "../table/RoomsTable";
import "./maindash.css";
const RoomsMainDash = () => {
    return (
        <div className="MainDash">
            <h1>Dashboard</h1>
            <Cards />
            <DataTable />
        </div>
    );
};

export default RoomsMainDash;