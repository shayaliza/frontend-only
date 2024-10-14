import React, { useEffect, useState } from 'react';

const NotificationComponent = ({ isOpen, onClose, notifications }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else {
      const timer = setTimeout(() => setIsAnimating(false), 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isAnimating && !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 backdrop-blur-md backdrop-brightness-150 bg-opacity-75 transition-opacity ease-in-out duration-300"
           onClick={onClose}
           aria-hidden="true">
      </div>

      <div className={`fixed inset-y-0 right-0 flex max-w-full pl-10 transform transition ease-in-out duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="w-screen max-w-md">
          <div className="h-full flex flex-col bg-white shadow-xl">
            <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-medium text-gray-900">Notifications</h2>
                <button
                  type="button"
                  className="rounded-md text-gray-700 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  onClick={onClose}
                >
                  <span className="sr-only">Close panel</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mt-8">
                {notifications.map((notification, index) => (
                  <div key={index} className="flex items-start space-x-4 py-4 border-b border-gray-200">
                    <img className="h-10 w-10 rounded-full" src={notification.userImage} alt={notification.userName} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{notification.userName}</p>
                      <p className="text-sm text-gray-700 truncate">{notification.message}</p>
                    </div>
                    <div className="flex-shrink-0 text-sm text-gray-700">
                      {notification.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 p-4">
              <button
                type="button"
                className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Clear all notifications
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationComponent;