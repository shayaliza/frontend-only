import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa"; // Import React icons

const EventList = ({ events, onEdit, onDelete }) => {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold mb-2">Events</h2>
      <ul>
        {events.map((event, index) => (
          <li
            key={index}
            className="flex justify-between items-center mb-2 p-2 border rounded"
          >
            <div>
              <h3 className="font-semibold">{event.title}</h3>
              <p>
                {event.start.toLocaleString()} - {event.end.toLocaleString()}
              </p>
              <span className="text-sm text-gray-600">{event.type}</span>
            </div>
            <div>
              <FaEdit
                onClick={() => onEdit(event)}
                className="text-blue-500 cursor-pointer mr-2"
                title="Edit"
              />
              <FaTrash
                onClick={() => onDelete(event)}
                className="text-red-500 cursor-pointer"
                title="Delete"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
