import React from "react";
import { createPortal } from "react-dom";
import Calendar from "react-calendar/dist/cjs/Calendar.js";
import "react-calendar/dist/Calendar.css";
import { ChevronDown, X } from "lucide-react";

const CustomPopup = ({
  isCalendarOpen,
  setIsCalendarOpen,
  formattedDate,
  setFormattedDate,
  setCustomPopupOpen,
  setNotificationTime
}) => {
  const handleDateChange = (newDate) => {
    if (newDate instanceof Date && !isNaN(newDate)) {
      const formatted = `${newDate.getFullYear()}-${String(
        newDate.getMonth() + 1
      ).padStart(2, "0")}-${String(newDate.getDate()).padStart(2, "0")}`;
      setFormattedDate(formatted); 
      setNotificationTime(formatted)
      setIsCalendarOpen(false);
    } else {
      console.error("Invalid date selected:", newDate);
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/10 dark:bg-black/20 backdrop-blur-sm">
      <div className="relative w-full max-w-[300px] md:max-w-md bg-white/80 dark:bg-gray-900/80 p-6 rounded-xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-lg">
      <div className="flex justify-between items-center mb-4 text-black dark:text-white">
        <h1 className="text-lg font-semibold">Pause Notifications for...</h1>
      <X className="w-5 h-5 cursor-pointer" onClick={() => setCustomPopupOpen(false)}/>
      </div>
        <div className="flex items-center justify-between mb-4">
          <div 
            className="w-full flex items-center justify-between border border-gray-300 dark:border-gray-700 p-3 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
            onClick={() => setIsCalendarOpen(!isCalendarOpen)}
          >
            <span className="text-gray-900 dark:text-white font-medium">
              {formattedDate || "Select a date"}
            </span>
            <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </div>
        </div>

        {isCalendarOpen && (
          <div className="absolute left-4 top-1/3 right-0 z-10 p-2">
            <Calendar
              onChange={handleDateChange}
              value={formattedDate ? new Date(formattedDate) : new Date()}
              className="w-full"
            />
          </div>
        )}

        <div className="mt-4 mb-4">
          <select className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500/50 transition-all duration-200 bg-white/80 dark:bg-gray-900/80 text-gray-900 dark:text-white">
            {[...Array(12)].map((_, i) => (
              <option key={i} value={`${i + 1}:00 AM`}>
                {i + 1}:00 AM
              </option>
            ))}
            {[...Array(12)].map((_, i) => (
              <option key={i + 12} value={`${i + 1}:00 PM`}>
                {i + 1}:00 PM
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            onClick={() => setCustomPopupOpen(false)}
            className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200 shadow-md"
          >
            Done
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};

export default CustomPopup;
