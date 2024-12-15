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
import { Button } from "../../components/ui/button";
import user from "../assets/man1.jpg";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import DND from "../assets/slack.png";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
  const [previousView, setPreviousView] = useState(null);
  const [availability, setAvailability] = useState("Available");
  const [workLocation, setWorkLocation] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [selectStatus, setSelectStatus] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [notificationTime, setNotificationTime] = useState("");
  const [duration, setDuration] = useState("");

  const formattedDate = selectedDate.toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const handleOptions = (option, from = "main") => {
    setPreviousView(from);
    setCurrentView(option);
    console.log(`Navigating from ${from} to ${option}`);
  };

  const goBack = () => {
    if (previousView) {
      setCurrentView(previousView);
      setPreviousView(null);
    } else {
      setCurrentView("main");
    }
  };

  const handleAvailability = (status) => {
    setAvailability(status);
    setPreviousView("status");
    setCurrentView("showStatus");
  };

  const handlePauseNotifications = (path) => {
    setNotificationTime(path);
    setPreviousView("notifications");
    setCurrentView("main");
  };

  const resumeNotifications = () => {
    setNotificationTime("");
    setCurrentView("main");
  };

  const saveStatus = () => {
    setCurrentView(previousView || "main");
    setPreviousView(null);
  };

  const mainOptions = [
    { icon: Moon, label: "Set yourself as away", action: () => {} },
    {
      icon: notificationTime ? PauseCircle : BellOff,
      label: "Pause notifications",
      hasChevron: true,
      Check: notificationTime ? "off" : "on",
      action: () => {
        if (notificationTime) {
          handleOptions("pause");
        } else {
          handleOptions("notifications");
        }
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
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src={user} alt="User avatar" />
            </Avatar>
            <div className="flex flex-col">
              <span className="text-lg font-medium">Saketh</span>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${availability === "Available" ? "bg-green-500" : "bg-red-600"}`} />
                <span className={`text-sm ${availability === "Available" ? "text-green-500" : "text-red-600"}`}>
                  {availability}
                </span>
              </div>
            </div>
          </div>
          {currentView !== "main" && (
            <button
              onClick={goBack}
              className="hover:text-red-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
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
                  <div className="flex items-center">
                    {option.Check && (
                      <span
                        className={`ml-2 text-sm font-medium ${
                          option.Check === "off"
                            ? "text-red-500"
                            : "text-green-500"
                        }`}
                      >
                        {option.Check === "off" ? "off" : "on"}
                      </span>
                    )}
                    {option.hasChevron && (
                      <ChevronRight className="w-5 h-5 ml-auto" />
                    )}
                  </div>
                }
                className={option.className}
              />
            ))}
          </div>
        </div>
      )}

      {currentView === "office" && (
        <div className="pt-1">
          <div className="px-4 flex justify-between items-center pb-2">
            <h2 className="text-lg font-semibold">For today</h2>
          </div>

          <div className="flex flex-col items-center border-b">
            <button
              className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-500 rounded-t-md transition"
              onClick={() => setWorkLocation("office")}
            >
              <School className="w-5 h-5" />
              <span className="font-medium">Office</span>
            </button>
            <button
              className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-500 transition"
              onClick={() => setWorkLocation("remote")}
            >
              <Home className="w-5 h-5" />
              <span className="font-medium">Remote</span>
            </button>
          </div>

          <button
            className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-500 rounded-b-md transition"
            onClick={() => handleOptions("main", "office")}
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
            <option value="1" className="bg-gray-800 text-white">
              Never
            </option>
            <option value="2" className="bg-gray-800 text-white">
              Today
            </option>
            <option value="3" className="bg-gray-800 text-white">
              1 hour
            </option>
            <option value="4" className="bg-gray-800 text-white">
              2 hours
            </option>
            <option value="5" className="bg-gray-800 text-white">
              This week
            </option>
            <option value="custom" className="bg-gray-800 text-white">
              Custom
            </option>
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
          </div>
          <div className="space-y-1">
            {[
              "30 minutes",
              "1 hour",
              "2 hours",
              "tomorrow",
              "next week",
              "custom",
            ].map((time) => (
              <button
                key={time}
                onClick={() => handlePauseNotifications(time)}
                className="hover:bg-gray-500 w-full text-left px-4 py-2 rounded transition-colors"
              >
                For {time}...
              </button>
            ))}
          </div>
        </div>
      )}

      {currentView === "pause" && (
        <div className="px-4 py-1 space-y-1">
          <div className="relative">
            <img src={DND} alt="" className="rounded-md" />
            <span className="absolute top-1/4 left-2 font-semibold">
              Do not disturb
            </span>
            <div className="absolute top-1/2 left-2 flex items-center space-x-2 text-xs">
              <p className="text-sm">Notifications paused until</p>
              <time className="text-sm font-semibold text-red-600">
                {notificationTime}
              </time>
            </div>
          </div>

          <nav aria-label="Notification controls" className="space-y-2 pb-2">
            <button
              onClick={resumeNotifications}
              className="w-full flex items-center space-x-2
                       bg-transparent
                       py-1 rounded-md 
                       transition-colors duration-200
                       focus:outline-none focus:ring-2 focus:ring-green-300 mb-2"
              aria-label="Resume notifications"
            >
              <span className="font-medium text-red-600">
                Resume Notifications
              </span>
            </button>

            <div className="flex space-x-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex-1 flex items-center justify-center space-x-2 border
           bg-transparent
           py-2 rounded-md 
           hover:bg-gray-500 
           transition-colors duration-200
           focus:outline-none focus:ring-2 focus:ring-gray-300"
                  >
                    <Clock className="w-5 h-5" />
                    <span className="text-sm">Adjust Time</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="p-2 space-y-1 flex flex-col items-center w-[200px]">
                  {[
                    "For 30 minutes",
                    "For 1 hour",
                    "For 2 hours",
                    "Until tomorrow",
                    "Until next week",
                    "custom",
                  ].map((time) => (
                    <button
                      key={time}
                      onClick={() => handlePauseNotifications(time)}
                      className="hover:bg-gray-500 w-full text-left px-2 py-2 rounded transition-colors"
                    >
                      {time}...
                    </button>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
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
        <div className="px-4 pt-1 space-y-2 pb-2">
          <div className="flex justify-between items-centerpb-2">
            <h2 className="text-lg font-semibold">Set a Status</h2>
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
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300 transition bg-transparent"
              onChange={(e) => setSelectStatus(e.target.value)}
            >
              <option value="1" className="bg-gray-800 text-white">
                1 hour
              </option>
              <option value="2" className="bg-gray-800 text-white">
                2 hours
              </option>
              <option value="3" className="bg-gray-800 text-white">
                3 hours
              </option>
              <option value="custom" className="bg-gray-800 text-white">
                Custom
              </option>
            </select>
          </div>

          {selectStatus === "custom" && (
            <div className="flex items-center justify-between py-2">
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
                <select className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300 transition bg-transparent text-sm">
                  {Array.from({ length: 12 }, (_, i) => (
                    <option
                      key={i}
                      value={`${i + 1}:00 AM`}
                      className="bg-gray-800 text-white"
                    >
                      {i + 1}:00 AM
                    </option>
                  ))}
                  {Array.from({ length: 12 }, (_, i) => (
                    <option
                      key={i + 12}
                      value={`${i + 1}:00 PM`}
                      className="bg-gray-800 text-white"
                    >
                      {i + 1}:00 PM
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          <h1>Pause Notifications</h1>
          <select
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300 transition bg-transparent mb-2"
            onChange={(e) => setDuration(e.target.value)}
          >
            <option value="1" className="bg-gray-800 text-white">
              Do not pause
            </option>
            <option value="2" className="bg-gray-800 text-white">
              1 hours
            </option>
            <option value="3" className="bg-gray-800 text-white">
              2 hours
            </option>
            <option value="custom" className="bg-gray-800 text-white">
              Custom
            </option>
          </select>

          <div className="flex justify-end gap-2">
            <button
              onClick={() => setCurrentView("status")}
              className="px-3 py-1 rounded-md hover:bg-gray-500 transition border"
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
