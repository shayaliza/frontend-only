import { MoreHorizontal, Cog, } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import image1 from "../assets/rsc/radu-florin-4_QFycgpC4c-unsplash.jpg";
import image2 from "../assets/rsc/jeffrey-keenan-pUhxoSapPFA-unsplash.jpg";
import image3 from "../assets/rsc/joshua-earle-ICE__bo2Vws-unsplash.jpg";

const notifications = [
  {
    id: 1,
    image: image1, 
    message: "Sanju sent you a friend request",
    time: "2h ago",
    description: "Tap to view their profile.",
  },
  {
    id: 2,
    image: image2,
    message: "Rakesh commented on your post",
    time: "1d ago",
    description: "Nice shot! Where was this taken?",
  },
  {
    id: 3,
    image: image3,
    message: "Siddharth liked your post",
    time: "3d ago",
    description: "Your recent post is trending!",
  },
];

function NotificationItem({ image, message, time, description }) {
  return (
    <div className="flex justify-between items-center px-4 py-2s hover:bg-gray-300 dark:hover:bg-stone-800">
      <div className="flex items-center space-x-4">
        <div className="relative rounded-full bg-black border border-gray-300 w-12 h-12 flex justify-center items-center">
        <img
          src={image}
          alt="User"
          className="rounded-full w-12 h-12 object-cover border border-gray-300"
        />
          <FaBell className="absolute -right-1 bottom-0 w-4 h-4 text-pink-600" />
        </div>
        <div>
          <p className="text-md font-medium">
            {message} <span className="text-gray-400 text-xs ml-1">. {time}</span>
          </p>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <button
        aria-label="More options"
        className="p-2 rounded"
      >
        <MoreHorizontal />
      </button>
    </div>
  );
}

function Alerts() {
    const navigate = useNavigate();
  return (
    <div className="p-6 max-w-screen-md mx-auto">
      <h1 className="text-2xl font-semibold mb-6 ml-3">Notifications</h1>
      <div className="flex justify-end items-center mb-4">
        <button className="text-sm font-medium border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
          Mark all as read
        </button>
        <button
          aria-label="Settings"
          className="p-2 rounded-full cursor-pointer"
          onClick={()=> navigate("/datasnap/settings/notifications")}
        >
          <Cog />
        </button>
      </div>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            image={notification.image}
            message={notification.message}
            time={notification.time}
            description={notification.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Alerts;
