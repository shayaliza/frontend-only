import React, { useState, useEffect, useRef } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdClose, MdEventNote } from "react-icons/md";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/outline";

const events = [
  {
    time: "10:00 am",
    title: "LMS Technical Support",
    duration: "45 min",
    color: "bg-green-200",
  },
  {
    time: "11:00 am",
    title: "Lite Development",
    duration: "60 min",
    color: "bg-blue-200",
  },
  {
    time: "12:00 am",
    title: "Guest UI Redesign",
    duration: "80 min",
    color: "bg-teal-200",
  },
  {
    time: "09:00 pm",
    title: "LMS Technical Support",
    duration: "45 min",
    color: "bg-purple-200",
  },
  {
    time: "10:00 pm",
    title: "Lite Development",
    duration: "45 min",
    color: "bg-orange-200",
  },
];

function Calendarcomponent() {
  const [date, setDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selected, setSelected] = useState("Upcoming");
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const plan = ["On Going", "Upcoming", "Ended", "Cancelled"];

  const ToggleSwitch = (option) => {
    setSelected(option);
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setIsCalendarOpen(false);
  };

  const handleDayClick = (day) => {
    setDate(day);
  };

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  const selectedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const startOfWeek = new Date(date);
  startOfWeek.setDate(date.getDate() - date.getDay());

  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const day = new Date(startOfWeek);
    day.setDate(startOfWeek.getDate() + i);
    return day;
  });

  useEffect(() => {
    if (isCalendarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isCalendarOpen]);

  const CalendarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        CalendarRef.current &&
        !CalendarRef.current.contains(event.target)
      ) {
        setIsCalendarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderButton = () => {
    switch (selected) {
      case "Upcoming":
        return (
          <button className="bg-indigo-600 text-white text-sm font-semibold py-2 px-4 rounded-lg">
            Notify Me
          </button>
        );
      case "Ended":
        return (
          <button className="bg-gray-600 text-white text-sm font-semibold py-2 px-4 rounded-lg">
            View Chat
          </button>
        );
      case "Cancelled":
        return (
          <button className="bg-red-600 text-white text-sm font-semibold py-2 px-4 rounded-lg">
            Cancelled
          </button>
        );
      default:
        return (
          <button className="bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-lg">
            Join Now
          </button>
        );
    }
  };

  return (
    <>
      <div className="p-4 max-w-screen mx-auto relative bg-background">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsCalendarOpen(true)}
            className="p-3 border-2 border-blue-600 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white hover:from-blue-500 hover:to-blue-700 transition duration-200 ease-in-out shadow-md"
          >
            {formattedDate}
          </button>
          <div
              onClick={() => setIsScheduleOpen(!isScheduleOpen)}
              className="text-white w-11 h-11 bg-blue-600 rounded-full p-2 cursor-pointer"
            >
              {isScheduleOpen ? <ArrowDownIcon /> : <ArrowUpIcon />}
            </div>
        </div>

        <div className="flex flex-col space-y-4 mt-6 items-center bg-white shadow-lg rounded-xl p-6 w-full mx-auto">
          <div className="grid grid-cols-7 gap-1 w-full">
            {weekDays.map((day, index) => (
              <span
                key={index}
                className="text-center text-xs md:text-sm lg:text-base font-bold text-gray-600"
              >
                {day.toLocaleDateString("en-US", { weekday: "short" })}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2 w-full">
            {weekDays.map((day, index) => (
              <button
                key={index}
                onClick={() => handleDayClick(day)}
                className={`text-center text-sm md:text-base lg:text-lg p-2 rounded-full font-semibold ${
                  date.getDate() === day.getDate()
                    ? "bg-blue-500 text-white shadow-lg"
                    : "text-gray-700 hover:bg-blue-100 transition-colors duration-150 ease-in-out"
                }`}
              >
                {day.getDate()}
              </button>
            ))}
          </div>
        </div>

        {!isScheduleOpen ? (
          <div className="mt-4 flex flex-col space-y-4">
            <div className="flex items-center bg-white rounded-full p-2 shadow-md w-full">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full">
                  <MdEventNote className="text-gray-700 text-xl" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">
                    UX Design Meeting
                  </h3>
                  <p className="text-xs text-gray-500">Starts in 5 mins</p>
                </div>
              </div>
              <div className="ml-auto flex items-center justify-center w-10 h-10 border border-gray-200 bg-gray-200 rounded-full">
                <MdClose className="text-red-500 text-lg" />
              </div>
            </div>

            <div
              className="grid items-center text-black gap-y-1 rounded-full border px-1 py-2 font-semibold leading-5 border-white/5 bg-white grid-cols-4"
              data-testid="plan-toggle-buttons"
            >
              {plan.map((option) => (
                <button
                  key={option}
                  onClick={() => ToggleSwitch(option)}
                  className={`px-2 py-1 text-sm rounded-full focus:outline-none ${
                    selected === option
                      ? "bg-indigo-600 text-white"
                      : "bg-transparent text-gray-500"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="w-full bg-teal-50 rounded-lg p-4 shadow-md">
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-gray-500">
                  January 5th, 2024 • 10:00 PM - 11:00 PM
                </div>
                <BsThreeDotsVertical className="text-gray-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                User Interface Design
              </h3>
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-gray-600">Starts in 35 mins</div>
                <div className="text-sm text-gray-600">Mark Johson room's</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    <img
                      className="w-8 h-8 rounded-full border-2 border-white"
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="profile"
                    />
                    <img
                      className="w-8 h-8 rounded-full border-2 border-white"
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="profile"
                    />
                    <img
                      className="w-8 h-8 rounded-full border-2 border-white"
                      src="https://randomuser.me/api/portraits/men/45.jpg"
                      alt="profile"
                    />
                    <div className="w-8 h-8 flex items-center justify-center bg-black text-white text-xs font-bold rounded-full">
                      5+
                    </div>
                  </div>
                </div>
                {renderButton()}
              </div>
            </div>

            <div className="w-full bg-purple-50 rounded-lg p-4 shadow-md">
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-gray-500">
                  January 6th, 2024 • 10:00 PM - 11:00 PM
                </div>
                <BsThreeDotsVertical className="text-gray-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Client Feedback Meeting
              </h3>
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-gray-600">
                  Starts in 1 hour 5 mins
                </div>
                <div className="text-sm text-gray-600">Mickels Room</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    <img
                      className="w-8 h-8 rounded-full border-2 border-white"
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="profile"
                    />
                    <img
                      className="w-8 h-8 rounded-full border-2 border-white"
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="profile"
                    />
                    <img
                      className="w-8 h-8 rounded-full border-2 border-white"
                      src="https://randomuser.me/api/portraits/men/45.jpg"
                      alt="profile"
                    />
                    <div className="w-8 h-8 flex items-center justify-center bg-black text-white text-xs font-bold rounded-full">
                      2+
                    </div>
                  </div>
                </div>
                {renderButton()}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center mt-4">
            {events.map((event, index) => (
              <div key={index} className="flex items-center w-full my-2">
                <div className="w-1/4 text-right text-black pr-4">
                  <span className="block text-sm">{event.time}</span>
                </div>
                <div
                  className={`w-3/4 rounded-lg py-4 px-6 ${event.color} shadow-md flex justify-between items-center`}
                >
                  <div>
                    <span className="block text-gray-900 font-semibold">
                      {event.title}
                    </span>
                    <span className="block text-gray-700 text-sm">
                      {event.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {isCalendarOpen && (
          <div
            className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center"
          >
            <div 
            ref={CalendarRef}
            className="bg-white rounded-lg shadow-lg">
              <Calendar
                onChange={handleDateChange}
                value={date}
                className="rounded-lg text-black"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Calendarcomponent;
