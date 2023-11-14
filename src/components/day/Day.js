import React from "react";
import "./day.css";
import candle from "../../assets/images/candle.png";

export default function Day({ heDate, enDate, isDay, azcara }) {

function handlePressDay(){
  azcara = "d";
  console.log(enDate)
}

  return isDay ? (
    <div className="cube" onClick={handlePressDay}>
      <div className="text-cube">
        <label>{enDate}</label>
        <label>{heDate}</label>
      </div>
      {azcara && (
        <div className="candle-container">
          <img className="candleImg" src={candle} alt={"candle"} />
        </div>
      )}
    </div>
  ) : (
    <div className="empty-cube"></div>
  );
}
