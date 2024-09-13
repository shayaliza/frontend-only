import React from "react";

function Notification() {
  return (
    <>
      <div className="p-6 max-w-md mx-auto">
        <div className="flex flex-nowrap overflow-auto gap-4 ">
          <div className="flex-shrink-0">
            <img
              src="https://dummyimage.com/70x70/00ff00"
              className="rounded-full"
            />
          </div>
          <div className="flex-shrink-0">
            <img
              src="https://dummyimage.com/70x70/ff0000"
              className="rounded-full"
            />
          </div>
          <div className="flex-shrink-0">
            <img
              src="https://dummyimage.com/70x70/0000ff"
              className="rounded-full"
            />
          </div>
          <div className="flex-shrink-0">
            <img
              src="https://dummyimage.com/70x70/00ff00"
              className="rounded-full"
            />
          </div>
          <div className="flex-shrink-0">
            <img
              src="https://dummyimage.com/70x70/ff0000"
              className="rounded-full"
            />
          </div>
          <div className="flex-shrink-0">
            <img
              src="https://dummyimage.com/70x70/0000ff"
              className="rounded-full"
            />
          </div>
        </div>
        <NotificationCard
          avatar="https://dummyimage.com/50x50"
          name="John Doe"
          time="2m"
          message="Hey, how are you doing?"
        />
        <NotificationCard
          avatar="https://dummyimage.com/50x50/00ff00"
          name="John Doe"
          time="2m"
          message="Hey, how are you doing?"
        />
        <NotificationCard
          avatar="https://dummyimage.com/50x50/ff0000/"
          name="John Doe"
          time="2m"
          message="Hey, how are you doing?"
        />
        <NotificationCard
          avatar="https://dummyimage.com/50x50/0000ff/"
          name="John Doe"
          time="2m"
          message="Hey, how are you doing?"
        />
        <NotificationCard
          avatar="https://dummyimage.com/50x50"
          name="John Doe"
          time="2m"
          message="Hey, how are you doing?"
        />
        <NotificationCard
          avatar="https://dummyimage.com/50x50/00ff00"
          name="John Doe"
          time="2m"
          message="Hey, how are you doing?"
        />
        <NotificationCard
          avatar="https://dummyimage.com/50x50/ff0000/"
          name="John Doe"
          time="2m"
          message="Hey, how are you doing?"
        />
        <NotificationCard
          avatar="https://dummyimage.com/50x50/0000ff/"
          name="John Doe"
          time="2m"
          message="Hey, how are you doing?"
        />
        <NotificationCard
          avatar="https://dummyimage.com/50x50"
          name="John Doe"
          time="2m"
          message="Hey, how are you doing?"
        />
        <NotificationCard
          avatar="https://dummyimage.com/50x50/00ff00"
          name="John Doe"
          time="2m"
          message="Hey, how are you doing?"
        />
        <NotificationCard
          avatar="https://dummyimage.com/50x50/ff0000/"
          name="John Doe"
          time="2m"
          message="Hey, how are you doing?"
        />
        <NotificationCard
          avatar="https://dummyimage.com/50x50/0000ff/"
          name="John Doe"
          time="2m"
          message="Hey, how are you doing?"
        />
      </div>
    </>
  );
}

export default Notification;

const NotificationCard = ({ avatar, name, time, message }) => {
  return (
    <div className="bg-white p-2 rounded-lg  flex items-start space-x-4">
      {/* Avatar */}
      <div className="w-12 h-12">
        <img
          src={avatar || "https://placehold.co/48x48"}
          alt="avatar"
          className="w-full h-full rounded-full"
        />
      </div>

      {/* Right Side: Name, Time, and Message */}
      <div className="flex-1">
        <div className="flex justify-between items-center">
          {/* Name */}
          <h4 className="text-sm font-semibold">{name}</h4>

          {/* Time */}
          <span className="text-xs text-gray-500">{time}</span>
        </div>

        {/* Message */}
        <p className="text-sm text-gray-600 mt-1">{message}</p>
      </div>
    </div>
  );
};
