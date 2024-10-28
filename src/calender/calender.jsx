import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { FaEdit, FaTrash } from "react-icons/fa"; // Import the edit and delete icons

const localizer = momentLocalizer(moment);

export default function CalendarComponent() {
  const [events, setEvents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [eventTitle, setEventTitle] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventStart, setEventStart] = useState(new Date());
  const [eventEnd, setEventEnd] = useState(new Date());
  const [filterType, setFilterType] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null); // New state for the selected event

  const meetingTypes = ["Interview", "Team Meeting", "Other"];

  // Define a color map for each meeting type
  const typeColors = {
    Interview: "green", // Green for Interviews
    "Team Meeting": "blue", // Blue for Team Meetings
    Other: "yellow", // Yellow for Other meetings
  };

  const handleSelect = ({ start, end }) => {
    setEventStart(start);
    setEventEnd(end);
    setEventTitle("");
    setEventType("");
    setSelectedEvent(null); // Reset for new events
    setModalOpen(true);
  };

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
    setEventTitle(event.title);
    setEventType(event.type);
    setEventStart(event.start);
    setEventEnd(event.end);
    setModalOpen(true);
  };

  const handleAddOrUpdateEvent = () => {
    if (selectedEvent) {
      // Update the existing event
      const updatedEvents = events.map((event) =>
        event === selectedEvent
          ? { ...event, title: eventTitle, type: eventType }
          : event
      );
      setEvents(updatedEvents);
    } else {
      // Add a new event
      const newEvent = {
        title: eventTitle,
        type: eventType,
        start: eventStart,
        end: eventEnd,
        allDay: false,
      };
      setEvents([...events, newEvent]);
    }

    setModalOpen(false);
    setEventTitle("");
    setEventType("");
    setSelectedEvent(null); // Reset the selected event
  };

  const handleDeleteEvent = (event) => {
    const updatedEvents = events.filter((e) => e !== event);
    setEvents(updatedEvents);
  };

  const handleFilterChange = (e) => {
    setFilterType(e.target.value);
  };

  const filteredEvents = filterType
    ? events.filter((event) => event.type === filterType)
    : events;

  // Customize event styles based on type
  const eventStyleGetter = (event) => {
    const backgroundColor = typeColors[event.type] || "gray"; // Default to gray if no type
    return {
      style: {
        backgroundColor: backgroundColor,
        opacity: 0.8,
        border: "none",
        borderRadius: "5px",
        color: "white", // Change text color if needed
      },
    };
  };

  const eventPropGetter = (event) => ({
    onClick: (e) => handleEventSelect(event),
    className: "relative", // To position the edit and delete icons
  });

  return (
    <div className="h-screen p-4 bg-gray-100">
      <div className="flex justify-between mb-4">
        <select
          value={filterType}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        >
          <option value="">All Meetings</option>
          {meetingTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <Calendar
        localizer={localizer}
        events={filteredEvents}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelect}
        style={{ height: 500, margin: "50px" }}
        eventPropGetter={eventPropGetter} // Use the custom style getter
        components={{
          event: ({ event }) => (
            <div className="flex justify-between items-center">
              <span>{event.title}</span>
              <div className="flex items-center">
                <FaEdit
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the event select
                    handleEventSelect(event);
                  }}
                  className="ml-2 text-white cursor-pointer"
                  size={14}
                />
                <FaTrash
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the event select
                    handleDeleteEvent(event);
                  }}
                  className="ml-2 text-white cursor-pointer"
                  size={14}
                />
              </div>
            </div>
          ),
        }}
      />

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white rounded shadow-lg p-6">
            <h2 className="text-lg font-bold mb-4">
              {selectedEvent ? "Edit Event" : "Add Event"}
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
            <div className="flex justify-between mb-2">
              <span>Start:</span>
              <span>{eventStart.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>End:</span>
              <span>{eventEnd.toLocaleString()}</span>
            </div>
            <button
              onClick={handleAddOrUpdateEvent}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              {selectedEvent ? "Update Event" : "Add Event"}
            </button>
            <button
              onClick={() => setModalOpen(false)}
              className="bg-red-500 text-white px-4 py-2 rounded ml-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
