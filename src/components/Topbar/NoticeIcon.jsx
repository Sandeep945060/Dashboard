import React, { useState } from "react";
import { Bell } from "lucide-react";

const NoticeIcon = ({ count = 0, notifications = [] }) => {
  const [open, setOpen] = useState(false);


  return (
    <div className="relative">
      {/* Bell Button */}
      <button
        onClick={() => setOpen(!open)}
        className="relative p-2 rounded-md bg-red-400 hover:bg-red-500"
      >
        <Bell className="w-6 h-6 text-white hover:text-gray-600" />
        {count > 0 && (
          <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white 
          text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
            {count}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg overflow-hidden z-50">
          <div className="p-2 font-semibold border-b">Notifications</div>
          <ul className="max-h-60 overflow-y-auto">
            {notifications.length > 0 ? (
              notifications.map((note, index) => (
                <li
                  key={index}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  {note}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-sm text-gray-500">No new notifications</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NoticeIcon;
