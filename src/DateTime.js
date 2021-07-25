import React from "react";
import "./DateTime.css";

export default function DateTime() {
  const currentDate = new Date();
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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

  const year = currentDate.getFullYear();
  const date = ("0" + currentDate.getDate()).slice(-2);
  const weekDay = weekDays[currentDate.getDay()];
  const month = months[currentDate.getMonth()];

  const formattedDate = `${weekDay}., ${month} ${date}, ${year}`;

  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = ("0" + currentTime.getMinutes()).slice(-2);

  const formattedTime = `(${hours}:${minutes})`;

  return (
    <span className="Date">
      <span className="date">{formattedDate}</span>
      <span className="time">{formattedTime}</span>
    </span>
  );
}
