import React from "react";
import "./calendar.css";
import Day from "../day/Day";

export default function Calendar() {
  const hebrewLetters = {
    1: "א",
    2: "ב",
    3: "ג",
    4: "ד",
    5: "ה",
    6: "ו",
    7: "ז",
    8: "ח",
    9: "ט",
    10: "י",
    11: "יא",
    12: "יב",
    13: "יג",
    14: "יד",
    15: "טו",
    16: "טז",
    17: "יז",
    18: "יח",
    19: "יט",
    20: "כ",
    21: "כא",
    22: "כב",
    23: "כג",
    24: "כד",
    25: "כה",
    26: "כו",
    27: "כז",
    28: "כח",
    29: "כט",
    30: "ל",
  };
  const daysArray = Array.from({ length: 7 }, (_, index) => index + 1);
  const days = [];
  // for (let i=1;i<=31;i++){
  //     days.push(<Day LDate={i}/>)
  // }

  return (
    <div className="calendar-board">
      {daysArray.map((dayNumber, index) => (
        <Day key={dayNumber} HDate={index+1} LDate={hebrewLetters[index+1]}/>
      ))}
    </div>
  );
}
