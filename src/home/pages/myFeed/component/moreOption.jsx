import React, { useEffect, useRef } from "react";

function MoreOptionsPopup({ onClose }) {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center z-50">
      <div ref={popupRef} className="bg-white rounded-lg shadow-lg w-72">
        <ul className="py-2">
          <li className="hover:bg-gray-100 cursor-pointer px-4 py-2">Report</li>
          <li className="hover:bg-gray-100 cursor-pointer px-4 py-2">
            Unfollow
          </li>
          <li className="hover:bg-gray-100 cursor-pointer px-4 py-2">
            Go to Post
          </li>
          <li className="hover:bg-gray-100 cursor-pointer px-4 py-2">
            Tagged Account
          </li>
          <li className="hover:bg-gray-100 cursor-pointer px-4 py-2">
            Share to...
          </li>
          <li className="hover:bg-gray-100 cursor-pointer px-4 py-2">
            Copy to
          </li>
          <li className="hover:bg-gray-100 cursor-pointer px-4 py-2">Embed</li>
          <li
            className="hover:bg-gray-100 cursor-pointer px-4 py-2 text-red-500"
            onClick={onClose}
          >
            Cancel
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MoreOptionsPopup;
