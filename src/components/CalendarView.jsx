import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US"; // <- ES module import
import "react-big-calendar/lib/css/react-big-calendar.css";

// Configure date-fns localizer
const locales = { "en-US": enUS };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function CalendarView() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = localStorage.getItem("events");
    if (!storedEvents || storedEvents === "undefined") return;

    const parsedEvents = JSON.parse(storedEvents);

    // Convert FullCalendar-style events to react-big-calendar format
    const formattedEvents = parsedEvents.map((evt) => ({
      title: evt.title,
      start: new Date(`${evt.date}T${evt.from}`),
      end: new Date(`${evt.date}T${evt.to}`),
    }));

    setEvents(formattedEvents);
  }, []);

  return (
    <div className="w-full md:p-4 bg-white rounded shadow">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        defaultView="month"
      />
    </div>
  );
}
