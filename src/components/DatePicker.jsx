import React, { useState } from "react";

const DatePicker = () => {
  const [selectedDay, setSelectedDay] = useState("DD");
  const [selectedMonth, setSelectedMonth] = useState("MM");
  const [selectedYear, setSelectedYear] = useState("YYYY");

  const days = Array.from({ length: 31 }, (_, index) =>
    (index + 1).toString().padStart(2, "0")
  );
  const months = Array.from({ length: 12 }, (_, index) =>
    (index + 1).toString().padStart(2, "0")
  );
  const years = Array.from({ length: 28 }, (_, index) =>
    (2023 + index).toString()
  ); // Years from 2023 to 2050

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div>
      <select
        value={selectedDay}
        className="w-[84px] h-9 border border-[#D2D2D2] rounded-lg mr-2"
        onChange={handleDayChange}
      >
        <option value="DD" selected={true}>
          DD
        </option>
        {days.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>
      <select
        value={selectedMonth}
        className="w-[84px] h-9 border border-[#D2D2D2] rounded-lg mr-2"
        onChange={handleMonthChange}
      >
        <option value="MM" selected={true}>
          MM
        </option>
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
      <select
        value={selectedYear}
        className="w-[84px] h-9 border border-[#D2D2D2] rounded-lg mr-2"
        onChange={handleYearChange}
      >
        <option value="YYYY" selected={true}>
          YYYY
        </option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DatePicker;
