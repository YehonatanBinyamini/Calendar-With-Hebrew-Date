import React, { useState } from "react";
import "./day.css";

export default function Day({ LDate, HDate }) {
  //const [LDate, setLDate] = useState("1");
  // const [HDate, setHDate] = useState("א");

  return (
    <div className="cube">
      {/* <div className="text-cube">{LDate.String()}</div> */}
      <div className="text-cube">
        <label>{HDate}</label>
        <label>{LDate}</label>
      </div>
    </div>
  );
}
