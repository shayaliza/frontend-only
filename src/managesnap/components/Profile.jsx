import React, { useState } from "react";
import {
  ChevronRight,
  Moon,
  BellOff,
  User2,
  Settings,
  Rocket,
  LogOut,
  CheckCircle,
  Circle,
  MinusCircle,
  AlertCircle,
  Slash,
  XCircle,
  X,
  CalendarIcon,
  ChevronLeft,
  School,
  MessageCircle,
  Home,
  Trash,
  ChevronDown,
  Play,
  Clock,
  PauseCircle,
} from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import user from "../assets/man1.jpg";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const OptionButton = ({
  icon: Icon,
  label,
  onClick,
  extra,
  className,
  fill,
}) => (
  <button
    onClick={onClick}
    className={`w-full flex justify-between items-center px-2 py-1 hover:bg-white/10 rounded-md ${
      className || ""
    }`}
  >
    <div className="flex items-center gap-4">
      <Icon fill={fill} className="w-5 h-5" />
      <span className="text-white">{label}</span>
    </div>
    {extra && <span className="text-white">{extra}</span>}
  </button>
);

function Profile() {
  const [currentView, setCurrentView] = useState("main");
  const [availability, setAvailability] = useState("");
  const [WorkLocation, setWorkLocation] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [notificationTime, setNotificationTime] = useState("");

  const formattedDate = selectedDate.toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const handleOptions = (option) => {
    setCurrentView(option);
    console.log(currentView);
  };

  const handleAvailability = (status) => {
    setAvailability(status);
    setCurrentView("showStatus");
  };

  const handlePauseNotifications = (path) => {
    setNotificationTime(path);
    setCurrentView("pause");
  };

  const saveStatus = () => {
    setCurrentView("main");
  };

  const mainOptions = [
    { icon: Moon, label: "Set yourself as away", action: () => {} },
    {
      icon: BellOff,
      label: "Pause notifications",
      hasChevron: true,
      action: () => {
        handleOptions("notifications");
      },
    },
    {
      icon: School,
      label: "Add in office",
      action: () => {
        handleOptions("office");
      },
    },
    {
      icon: MessageCircle,
      label: "Set status message",
      action: () => {
        handleOptions("message");
      },
    },
    { icon: User2, label: "Profile" },
    { icon: Settings, label: "Preferences" },
    { icon: Rocket, label: "Upgrade snapthetech" },
    { icon: LogOut, label: "Sign out", className: "text-red-400" },
  ];

  const statusOptions = [
    {
      icon: CheckCircle,
      classname: "text-green-600",
      label: "Available",
      extra: "1 hour",
      action: () => handleAvailability("Available"),
    },
    {
      icon: Circle,
      fill: "#e1180a",
      label: "Busy",
      classname: "text-red-600",
      extra: "Until 5 PM",
      action: () => handleAvailability("Busy"),
      className: "text-red-600",
    },
    {
      icon: MinusCircle,
      label: "Do Not Disturb",
      classname: "text-yellow-600",
      extra: "Custom",
      action: () => handleAvailability("Do Not Disturb"),
    },
    {
      icon: AlertCircle,
      label: "Be Right Back",
      classname: "text-blue-500",
      extra: "30 min",
      action: () => handleAvailability("Be Right Back"),
    },
    {
      icon: Slash,
      label: "Appear Away",
      classname: "text-orange-500",
      extra: "2 days",
      action: () => handleAvailability("Appear Away"),
    },
    {
      icon: XCircle,
      label: "Appear Offline",
      classname: "text-gray-500",
      extra: "3 days",
      action: () => handleAvailability("Appear Offline"),
    },
  ];

  return (
    <div>
      <div className="p-3 space-y-1">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src={user} alt="User avatar" />
          </Avatar>
          <div className="flex flex-col">
            <span className="text-lg font-medium">Saketh</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm text-green-500">
                {availability || "Active"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {currentView === "main" && (
        <div className="flex flex-col">
          <div className="px-2">
            <OptionButton
              icon={() => (
                <span role="img" aria-label="smile emoji">
                  😊
                </span>
              )}
              label="Update your status"
              onClick={() => setCurrentView("status")}
              extra={<ChevronRight className="w-5 h-5" />}
            />
          </div>
          <div className="px-2 py-1 space-y-1">
            {mainOptions.map((option, index) => (
              <OptionButton
                key={index}
                icon={option.icon}
                label={option.label}
                onClick={option.action}
                extra={
                  option.hasChevron && (
                    <ChevronRight className="w-5 h-5 ml-auto" />
                  )
                }
                className={option.className}
              />
            ))}
          </div>
        </div>
      )}

      {currentView === "office" && (
        <div className="px-4 pt-1 pb-2">
          <div className="px-4 flex justify-between items-center pb-2">
            <h2 className="text-lg font-semibold">For today</h2>
            <button
              onClick={() => setCurrentView("main")}
              className="hover:text-red-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col items-center">
            <button
              className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-500 rounded-md transition"
              onClick={() => setWorkLocation("office")}
            >
              <School className="w-5 h-5 text-blue-500" />
              <span className="font-medium">Office</span>
            </button>
            <button
              className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-500 rounded-md transition"
              onClick={() => setWorkLocation("remote")}
            >
              <Home className="w-5 h-5 text-green-500" />
              <span className="font-medium">Remote</span>
            </button>
          </div>

          <button
            className="w-full flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-gray-500 rounded-md transition"
            onClick={() => setCurrentView("main")}
          >
            <Trash className="w-5 h-5" />
            <span>Clear work location</span>
          </button>
        </div>
      )}

      {currentView === "message" && (
        <div className="px-4 py-2 space-y-3">
          <div className="flex justify-between items-center pb-2">
            <div className="flex flex-col">
              <h2 className="text-md font-semibold">Set status message</h2>
              <span>saketh@se.com</span>
            </div>
            <button
              onClick={() => setCurrentView("main")}
              className="hover:text-red-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <textarea
            className="w-full bg-transparent rounded-md border px-2 py-1"
            placeholder="Set status message here..."
            rows={4}
          />
          <div className="flex space-x-2 items-center py-2">
            <input type="checkbox" name="show" id="showmess" />
            <span className="text-sm">Show when people message me</span>
            <AlertCircle className="w-3 h-3" />
          </div>

          <select
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300 transition bg-transparent text-gray-400"
            onChange={(e) => setSelectValue(e.target.value)}
          >
            <option value="1">Never</option>
            <option value="2">Today</option>
            <option value="3">1 hour</option>
            <option value="4">2 hours</option>
            <option value="5">This week</option>
            <option value="custom">Custom</option>
          </select>

          {selectValue === "custom" && (
            <div className="flex items-center justify-between py-4">
              <div className="">
                <div
                  className="flex items-center border p-2 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                >
                  <span className="text-white">{formattedDate}</span>
                  <ChevronDown className="w-4 h-4 ml-2 text-gray-500" />
                </div>
              </div>

              <div className="w-1/3">
                <select className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300 transition bg-transparent text-gray-400 text-sm">
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i} value={`${i + 1}:00 AM`}>
                      {i + 1}:00 AM
                    </option>
                  ))}
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i + 12} value={`${i + 1}:00 PM`}>
                      {i + 1}:00 PM
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          <div className="flex justify-between items-center py-2">
            <span className="text-blue-600 cursor-pointer">
              Schedule out of office
            </span>
            <button
              onClick={() => saveStatus()}
              className="px-3 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {currentView === "notifications" && (
        <div className="px-2 py-1 space-y-2">
          <div className="px-4 flex justify-between items-center pb-2">
            <h2 className="text-sm font-semibold">
              Pause notifications for...
            </h2>
            <button
              onClick={() => setCurrentView("main")}
              className="hover:text-red-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-1">
            <button
              onClick={() => handlePauseNotifications("30 minutes")}
              className="hover:bg-gray-500 w-full text-left px-4 py-2 rounded transition-colors"
            >
              For 30 minutes...
            </button>
            <button
              onClick={() => handlePauseNotifications("1 hour")}
              className="hover:bg-gray-500 w-full text-left px-4 py-2 rounded transition-colors"
            >
              For 1 hour...
            </button>
            <button
              onClick={() => handlePauseNotifications("2 hours")}
              className="hover:bg-gray-500 w-full text-left px-4 py-2 rounded transition-colors"
            >
              For 2 hours...
            </button>
            <button
              onClick={() => handlePauseNotifications("tomorrow")}
              className="hover:bg-gray-500 w-full text-left px-4 py-2 rounded transition-colors"
            >
              Until tomorrow
            </button>
            <button
              onClick={() => handlePauseNotifications("next week")}
              className="hover:bg-gray-500 w-full text-left px-4 py-2 rounded transition-colors"
            >
              Until next week
            </button>
            <button
              onClick={() => handlePauseNotifications("custom")}
              className="hover:bg-gray-500 w-full text-left px-4 py-2 rounded transition-colors"
            >
              Custom...
            </button>
          </div>
        </div>
      )}

      {currentView === "pause" && (
        <div className="px-4 py-1 space-y-1">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-3">
            <PauseCircle className="w-6 h-6" />
            <h2 className="text-base font-bold">Do Not Disturb</h2>
          </div>
          <X className="w-5 h-5 hover:text-red-500 transition-colors cursor-pointer" onClick={() => setCurrentView("main")}/>
        </div>
  
        <div className="">
          <div className="flex items- space-x-2">
            <p className="text-sm">
              Notifications paused until
            </p>
            <time className="text-sm font-semibold text-red-600">
              {notificationTime}
            </time>
          </div>
        </div>
  
        <nav 
          aria-label="Notification controls" 
          className="space-y-2"
        >
          <button
            // onClick={resumeNotifications}
            className="w-full flex items-center space-x-2
                       bg-transparent 
                       py-2 rounded-md 
                       transition-colors duration-200
                       focus:outline-none focus:ring-2 focus:ring-green-300 mb-2"
            aria-label="Resume notifications"
          >
            <Play className="w-5 h-5" />
            <span className="font-medium">Resume Notifications</span>
          </button>
  
          <div className="flex space-x-2">
            <button
              // onClick={adjustTime}
              className="flex-1 flex items-center justify-center space-x-2 border
                         bg-transparent
                         py-2 rounded-md 
                         hover:bg-gray-500 
                         transition-colors duration-200
                         focus:outline-none focus:ring-2 focus:ring-gray-300"
              aria-label="Adjust notification pause time"
            >
              <Clock className="w-5 h-5" />
              <span className="text-sm">Adjust Time</span>
            </button>
  
            <button
              // onClick={setNotificationSchedule}
              className="flex-1 flex items-center justify-center space-x-2 border
                         bg-transparent
                         py-2 rounded-md 
                         hover:bg-gray-500 
                         transition-colors duration-200
                         focus:outline-none focus:ring-2 focus:ring-gray-300"
              aria-label="Set a notification schedule"
            >
              <CalendarIcon className="w-5 h-5" />
              <span className="text-sm">Schedule</span>
            </button>
          </div>
        </nav>
      </div>
      )}

      {currentView === "status" && (
        <div className="px-2 py-1 space-y-1">
          <div
            className="flex space-x-2 items-center pb-2 cursor-pointer"
            onClick={() => setCurrentView("main")}
          >
            <ChevronLeft className="w-4 h-4 mt-0.5" />
            <h1>Back</h1>
          </div>
          {statusOptions.map((status, index) => (
            <OptionButton
              key={index}
              icon={status.icon}
              fill={status.fill}
              label={status.label}
              onClick={status.action}
              extra={status.extra}
              className={status.classname}
            />
          ))}
        </div>
      )}

      {currentView === "showStatus" && (
        <div className="px-4 pt-1 space-y-4 pb-2">
          <div className="flex justify-between items-centerpb-2">
            <h2 className="text-lg font-semibold">Set a Status</h2>
            <button
              onClick={() => setCurrentView("status")}
              className="hover:text-red-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="border rounded-md p-3 flex items-center justify-between hover:bg-gray-500 transition">
            <div className="flex gap-2 items-center">
              <CalendarIcon className="w-5 h-5 text-blue-500" />
              <span className="font-medium">{availability}</span>
            </div>
            <button className="hover:text-red-500 transition-colors">
              <XCircle className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Remove status after...</h3>
            <select
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300 transition bg-transparent text-gray-300 "
              onChange={(e) => setDuration(e.target.value)}
            >
              <option value="1">1 hour</option>
              <option value="2">2 hours</option>
              <option value="3">3 hours</option>
              <option value="custom">Custom</option>
            </select>
          </div>

          <div className="flex justify-end gap-2">
            <button
              onClick={() => setCurrentView("status")}
              className="px-3 py-1 rounded-md hover:bg-gray-300 transition border"
            >
              Cancel
            </button>
            <button
              onClick={() => saveStatus()}
              className="px-3 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
