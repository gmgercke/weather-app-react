import React from "react";
import "./DateTime.css";

export default function DateTime() {
  const currentDate = new Date();
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const nth = function (d) {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const year = currentDate.getFullYear();
  const date = currentDate.getDate();
  const weekDay = weekDays[currentDate.getDay()];
  const month = months[currentDate.getMonth()];

  const formattedDate = `${weekDay}, ${month} ${date}${nth(date)} ${year}`;

  const currentTime = new Date();
  const hours = ("0" + currentTime.getHours()).slice(-2);
  const minutes = ("0" + currentTime.getMinutes()).slice(-2);

  const formattedTime = `(${hours}:${minutes})`;

  return (
    <span className="Date">
      <span className="date">{formattedDate}</span>
      <span className="time">{formattedTime}</span>
    </span>
  );
}
