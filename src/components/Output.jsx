import React from "react";

const Output = ({ bill, satisfactory, friend }) => {
  const myTip = Number((satisfactory / 100) * bill);
  const friendTip = Number((friend / 100) * bill);
  const TotalBill = bill + myTip + friendTip;
  return (
    <div>
      <p>Your bill is ${TotalBill}</p>
    </div>
  );
};

export default Output;
