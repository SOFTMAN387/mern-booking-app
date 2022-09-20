import React from "react";
import Cards from "../Cards/Cards";
import DataTable from "../table/HotelsTable";
import "./maindash.css";
const HotelsMainDash = () => {
    return (
        <div className="MainDash">
            <h1>Dashboard</h1>
            <Cards />
            <DataTable />
        </div>
    );
};

export default HotelsMainDash;