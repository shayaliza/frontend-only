import React, { useState, useEffect } from "react";

const EventModal = ({ event, onSave, onClose }) => {
  const [eventTitle, setEventTitle] = useState("");
  const [eventType, setEventType] = useState("");
  const meetingTypes = ["Interview", "Team Meeting", "Other"];

  useEffect(() => {
    if (event) {
      setEventTitle(event.title);
      setEventType(event.type);
    }
  }, [event]);

  const handleAddOrUpdateEvent = () => {
    const newEvent = {
      title: eventTitle,
      type: eventType,
      start: event.start,
      end: event.end,
      allDay: false,
    };
    onSave(newEvent);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white rounded shadow-lg p-6">
        <h2 className="text-lg font-bold mb-4">
          {event ? "Edit Event" : "Add Event"}
        </h2>
        <input
          type="text"
          placeholder="Event Title"
          value={eventTitle}
          onChange={(e) => setEventTitle(e.target.value)}
          className="border p-2 mb-2 w-full"
        />
        <select
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          className="border p-2 mb-2 w-full"
        >
          <option value="">Select Meeting Type</option>
          {meetingTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <button
          onClick={handleAddOrUpdateEvent}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {event ? "Update Event" : "Add Event"}
        </button>
        <button
          onClick={onClose}
          className="bg-red-500 text-white px-4 py-2 rounded ml-2"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EventModal;
