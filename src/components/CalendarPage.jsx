import React, { useState } from "react";
import { format } from "date-fns";
import SignedInNavbar from "./SignedInNavbar";  

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isEventModalOpen, setEventModalOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    description: "",
  });

  // Dates for the calendar grid (September 2024 as example)
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);
  const currentMonth = "September 2024";

  // Handle Event Creation
  const handleCreateEvent = () => {
    if (newEvent.title && newEvent.date) {
      setEvents([...events, newEvent]);
      setNewEvent({ title: "", date: "", description: "" });
      setEventModalOpen(false);
    }
  };

  // Get events for the selected date
  const eventsForDate = (date) => {
    return events.filter((event) => event.date === date);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <SignedInNavbar />

      <main className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Calendar</h1>
            <button
            onClick={() => setEventModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 shadow-sm"
            >
            New Event
            </button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
            {currentMonth}
            </h2>
            <div className="grid grid-cols-7 gap-2">
            {daysInMonth.map((day) => {
                const formattedDate = `2024-09-${String(day).padStart(2, "0")}`;
                const hasEvent = eventsForDate(formattedDate).length > 0;
                return (
                <button
                    key={day}
                    onClick={() => setSelectedDate(formattedDate)}
                    className={`p-4 rounded-lg ${
                    hasEvent ? "bg-blue-100" : "bg-gray-100"
                    } hover:bg-blue-200`}
                >
                    <span className="block text-lg font-semibold text-gray-700">
                    {day}
                    </span>
                    {hasEvent && <span className="text-sm text-blue-600">Event</span>}
                </button>
                );
            })}
            </div>
        </div>

        {selectedDate && (
            <div className="mt-6 bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800">
                Events on {format(new Date(selectedDate), "EEEE, MMMM d, yyyy")}
            </h3>
            <ul className="mt-4 space-y-2">
                {eventsForDate(selectedDate).length > 0 ? (
                eventsForDate(selectedDate).map((event, index) => (
                    <li
                    key={index}
                    className="bg-gray-100 p-3 rounded-lg shadow-sm"
                    >
                    <h4 className="text-blue-600 font-semibold">{event.title}</h4>
                    <p className="text-gray-600">{event.description}</p>
                    </li>
                ))
                ) : (
                <p className="text-gray-600">No events on this day.</p>
                )}
            </ul>
            </div>
        )}

        {isEventModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                New Event
                </h2>
                <div className="space-y-4">
                <input
                    type="text"
                    placeholder="Event Title"
                    value={newEvent.title}
                    onChange={(e) =>
                    setNewEvent({ ...newEvent, title: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
                <input
                    type="date"
                    value={newEvent.date}
                    onChange={(e) =>
                    setNewEvent({ ...newEvent, date: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
                <textarea
                    placeholder="Description"
                    value={newEvent.description}
                    onChange={(e) =>
                    setNewEvent({ ...newEvent, description: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                ></textarea>
                </div>
                <div className="mt-4 flex justify-end space-x-2">
                <button
                    onClick={() => setEventModalOpen(false)}
                    className="px-4 py-2 bg-gray-300 rounded-lg"
                >
                    Cancel
                </button>
                <button
                    onClick={handleCreateEvent}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                >
                    Save
                </button>
                </div>
            </div>
            </div>
        )}
      </main>
    </div>
  );
};

export default CalendarPage;
