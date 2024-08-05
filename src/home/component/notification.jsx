import { useState } from "react";
import { Link } from "react-router-dom";
import NotificationCenter from "./NotificationCenter.jsx";

function Notification({ setCurrentSection }) {
  const [isNotificationVisible, setNotificationVisible] = useState(false);

  const toggleNotifications = () =>
    setNotificationVisible(!isNotificationVisible);

  return (
    <div
      className="notification relative flex items-center mx-2 cursor-pointer"
      onClick={toggleNotifications}
    >
      <img
        src="https://img.icons8.com/ios/50/000000/appointment-reminders.png"
        className="w-6 h-6"
        alt="Notifications"
      />
      {isNotificationVisible && (
        <div
          className="notification_DropDown flex flex-col p-4 rounded-lg absolute top-[65px] right-[-110%] w-[300px] z-50 bg-white text-center justify-between text-base"
          style={{
            boxShadow:
              "0 -5px 10px -5px rgba(0, 0, 0, 0.35), 5px 0 10px -5px rgba(0, 0, 0, 0.35), -5px 0 10px -5px rgba(0, 0, 0, 0.35)",
          }}
        >
          <div className="notifications py-2">
            <p className="font-semibold text-gray-800">New Notifications</p>
            <div className="notification_item flex items-center p-2 border-b">
              <img
                src="https://img.icons8.com/ios/50/000000/appointment-reminders.png"
                className="w-6 h-6 mr-2"
                alt="Notification"
              />
              <div className="notification_details">
                <p className="font-medium">Notification 1</p>
                <p className="text-gray-600">
                  This is a description for notification 1.
                </p>
              </div>
            </div>
            <div className="notification_item flex items-center p-2 border-b">
              <img
                src="https://img.icons8.com/ios/50/000000/appointment-reminders.png"
                className="w-6 h-6 mr-2"
                alt="Notification"
              />
              <div className="notification_details">
                <p className="font-medium">Notification 2</p>
                <p className="text-gray-600">
                  This is a description for notification 2.
                </p>
              </div>
            </div>
          </div>
          <div className="see_all_notifications p-3 text-center">
            <Link
              onClick={() => setCurrentSection(<NotificationCenter />)}
              className="text-blue-500 hover:text-blue-700"
            >
              See all notifications
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notification;
