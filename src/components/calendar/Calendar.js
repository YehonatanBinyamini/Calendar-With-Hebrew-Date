import React from "react";
import "./calendar.css";
import Day from "../day/Day";
import { useSelector, useDispatch } from "react-redux";
import { monthsActions } from "../../store/months";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
const daysOfWeek = [
  "יום א",
  "יום ב",
  "יום ג",
  "יום ד",
  "יום ה",
  "יום ו",
  "שבת",
];

const months = [
  "ינואר",
  "פברואר",
  "מרץ",
  "אפריל",
  "מאי",
  "יוני",
  "יולי",
  "אוגוסט",
  "ספטמבר",
  "אוקטובר",
  "נובמבר",
  "דצמבר",
];

export default function Calendar() {
  const monthState = useSelector((state) => state.months);
  const daysArray = monthState.currentMonthArray;
  const displayingTimestamp = monthState.displayingTimestamp;
  const heMonthsTitle = monthState.heMonthsTitle;
  const displayingDate = new Date(displayingTimestamp);
  const dispatch = useDispatch();

  function nextMonthHandle() {
    dispatch(monthsActions.setNextMonth());
  }

  function previousMonthHandle() {
    dispatch(monthsActions.setPreviousMonth());
  }

  // function handleClickOnDay(){

  // }

  return (
    <div>
      <div className="buttons-container">
        <button className="btn" onClick={nextMonthHandle}>
          <ArrowBackIosNewIcon />
        </button>
        <button className="btn" onClick={previousMonthHandle}>
          <ArrowForwardIosIcon />
        </button>
      </div>
      <div className="month-title">
        <label className="en-date-title">
        {months[displayingDate.getMonth()] + " " + displayingDate.getFullYear()}
        </label>
        <label className="he-date-title">
          {heMonthsTitle}
        </label>
      </div>
      <div className="week-days">
        {daysOfWeek.map((day, index) => (
          <label key={index} className="label-text">
            {day}
          </label>
        ))}
      </div>
      <div className="calendar-board">
        {daysArray.map((item) => (
          <Day
            key={item.id}
            heDate={item.heDate}
            enDate={item.enDate}
            isDay={item.isDay}
            azcara={item.azcara}
            // onPressDay={()=>handleClickOnDay()}
          />
        ))}
      </div>
    </div>
  );
}
