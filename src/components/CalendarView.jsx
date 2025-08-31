import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";



export default function CalendarView() {

  const [eventData, setEventData] = useState(null)

  useEffect(() => {
    //get data from storage
    const eventData = localStorage.getItem("events");
    if (!eventData || eventData === "undefined") return null;
    setEventData(JSON.parse(eventData));

    console.log(eventData);

    //save data to state
  }, []);

  return (
    <div className="w-120 p-4 bg-white rounded shadow">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={eventData}
        editable={true}
        selectable={true}
      />
    </div>
  );
}
