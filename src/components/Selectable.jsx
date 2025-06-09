import React from "react";

const Selectable = ({ onSelect }) => {
  return (
    <select
      onChange={(e) => {
        onSelect(Number(e.target.value));
        console.log(e.target.value);
      }}
    >
      <option value={0}>dissatisfied 0%</option>
      <option value={5}>Good 5%</option>
      <option value={10}>Very satisified 10%</option>
    </select>
  );
};

export default Selectable;
