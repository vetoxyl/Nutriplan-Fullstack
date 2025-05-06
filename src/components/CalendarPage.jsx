import React, { useState } from "react";
import CalendarView from "./CalendarView";
import DayView from "./DayView";

const CalendarPage = () => {
  const [currentPage, setCurrentPage] = useState("calendar");
  const [selectedDate, setSelectedDate] = useState(null);

  const goToDayView = (date) => {
    setSelectedDate(date);
    setCurrentPage("day");
  };

  const goBackToCalendar = () => {
    setCurrentPage("calendar");
  };

  return (
    <>
      {currentPage === "calendar" && (
        <CalendarView onSelectDate={goToDayView} />
      )}
      {currentPage === "day" && selectedDate && (
        <DayView date={selectedDate} goBack={goBackToCalendar} />
      )}
    </>
  );
};

export default CalendarPage;
