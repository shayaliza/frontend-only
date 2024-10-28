import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { FaEdit, FaTrash } from "react-icons/fa"; // Import the edit and delete icons
import "./calender.css"; // Import your custom CSS file

const localizer = momentLocalizer(moment);

export default function CalendarComponent() {
  const [events, setEvents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [eventTitle, setEventTitle] = useState("");
  const [eventType, setEventType] = useState("");
  const [filterType, setFilterType] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null); // New state for the selected event
  const [eventStart, setEventStart] = useState(new Date()); // Add state for event start time
  const [eventEnd, setEventEnd] = useState(new Date()); // Add state for event end time

  const meetingTypes = ["Interview", "Team Meeting", "Other"];

  // Define a color map for each meeting type
  const typeColors = {
    Interview: "#38a169", // Green for Interviews
    "Team Meeting": "#dd6b20", // Orange for Team Meetings
    Other: "#f6e05e", // Yellow for Other meetings
  };

  const handleSelect = ({ start, end }) => {
    setEventTitle("");
    setEventType("");
    setEventStart(start); // Set start date from the selected slot
    setEventEnd(end); // Set end date from the selected slot
    setSelectedEvent(null); // Reset for new events
    setModalOpen(true);
  };

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
    setEventTitle(event.title);
    setEventType(event.type);
    setEventStart(event.start); // Set start date for editing
    setEventEnd(event.end); // Set end date for editing
    setModalOpen(true);
  };

  const handleAddOrUpdateEvent = () => {
    if (selectedEvent) {
      // Update the existing event
      const updatedEvents = events.map((event) =>
        event === selectedEvent
          ? {
              ...event,
              title: eventTitle,
              type: eventType,
              start: eventStart,
              end: eventEnd,
            }
          : event
      );
      setEvents(updatedEvents);
    } else {
      // Add a new event
      const newEvent = {
        title: eventTitle,
        type: eventType,
        start: eventStart, // Set start from the state
        end: eventEnd, // Set end from the state
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
    const backgroundColor = typeColors[event.type] || "bg-gray-400"; // Default to gray if no type
    return {
      style: {
        backgroundColor: backgroundColor,
        border: "none",
        borderRadius: "0.5rem",
        color: "white",
        fontSize: "10px",
      },
    };
  };

  const eventPropGetter = (event) => ({
    onClick: (e) => handleEventSelect(event),
    className: "relative transition-transform transform ", // Hover effect
    ...eventStyleGetter(event), // Apply event styles
  });

  return (
    <div className="h-screen p-4 bg-gray-100">
      <div className="flex justify-between mb-4">
        <select
          value={filterType}
          onChange={handleFilterChange}
          className="border p-2 rounded-md shadow-sm"
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
        style={{
          height: 600,
          margin: "50px",
          border: "1px solid #ccc",
          borderRadius: "0.5rem",
        }} // Adjust height as needed
        eventPropGetter={eventPropGetter}
        components={{
          event: ({ event }) => (
            <div className="flex justify-between items-center p-1 text-white rounded-md shadow-md">
              <span>{event.title}</span>
              <div className="flex items-center">
                <FaEdit
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEventSelect(event);
                  }}
                  className="ml-2 cursor-pointer "
                  size={10}
                />
                <FaTrash
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteEvent(event);
                  }}
                  className="ml-2 cursor-pointer"
                  size={10}
                />
              </div>
            </div>
          ),
        }}
      />

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-lg font-bold mb-4 text-gray-700">
              {selectedEvent ? "Edit Event" : "Add Event"}
            </h2>
            <input
              type="text"
              placeholder="Event Title"
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
              className="border border-gray-300 p-2 mb-2 w-full rounded"
            />
            <select
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="border border-gray-300 p-2 mb-2 w-full rounded"
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
              className="bg-blue-600 text-white px-4 py-2 rounded transition-colors duration-200 hover:bg-blue-700"
            >
              {selectedEvent ? "Update Event" : "Add Event"}
            </button>
            <button
              onClick={() => setModalOpen(false)}
              className="bg-red-600 text-white px-4 py-2 rounded transition-colors duration-200 hover:bg-red-700 ml-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
