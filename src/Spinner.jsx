import React from "react";

const Spinner = ({ additionalClass }) => {
  return (
    <div className={`lds-roller ${additionalClass ? additionalClass : ""}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
