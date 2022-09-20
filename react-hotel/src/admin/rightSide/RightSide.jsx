import React from "react";
//import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../updates/Updates";
import "./rightside.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
      <h3>Hi,SoftMan.</h3>
        <br></br>
        <h3>Admins</h3>
        <br></br>
        <Updates />
      </div>
      <div>
        {/* <h3>Customer Review</h3> */}
        {/* <CustomerReview /> */}
      </div>
    </div>
  );
};

export default RightSide;