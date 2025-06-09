import React, { useState } from "react";
import Bill from "./components/Bill";
import Output from "./components/Output";
import Selectable from "./components/Selectable";

const App = () => {
  const [bill, setBill] = useState("");
  const [satisfactory, setSatisfactory] = useState(0);
  const [friend, setFriend] = useState(0);
  function handleReset() {
    setBill(0);
    setSatisfactory(0);
    setFriend(0);
  }
  return (
    <div className="app">
      <Bill onBill={setBill} />

      <div className="question">
        <p>How did you like the service?</p>
        <Selectable onSelect={setSatisfactory} />
      </div>

      <div className="question">
        <p>How did your friend like the service?</p>
        <Selectable onSelect={setFriend} />
      </div>
      <Output bill={bill} satisfactory={satisfactory} friend={friend} />

      <div className="actions">
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default App;
