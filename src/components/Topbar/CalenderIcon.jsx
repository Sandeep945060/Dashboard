// src/components/Topbar/CalendarIcon.jsx
import React, { useState } from "react";
import { Calendar } from "lucide-react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // default calendar styles

export default function CalendarIcon() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState(new Date());

  return (
    <div className="relative">
      {/* Calendar button */}
      <button
        type="button"
        onClick={() => setShowCalendar((prev) => !prev)}
        className="p-2 rounded-md bg-red-400 hover:bg-red-500 transition"
      >
        <Calendar size={24 } color="white" className="hover:text-gray-600" />
      </button>

      {/* Calendar popup */}
      {showCalendar && (
        <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-2 ">
          <ReactCalendar value={date} onChange={setDate} />
        </div>
      )}
    </div>
  );
}
