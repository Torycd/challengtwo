import React from "react";

const Bill = ({ onBill }) => {
  return (
    <>
      <label>How much was the Bill?</label>
      <input type="number" onChange={(e) => onBill(Number(e.target.value))} />
    </>
  );
};

export default Bill;
