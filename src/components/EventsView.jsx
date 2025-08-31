import { useState, useEffect } from "react";
import Table from "../components/Table";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";
const EventsView = () => {
  const [eventData, setEventData] = useState(null);
  const navigate = useNavigate();

  const handleDelete = (title) => {
    const updated = eventData.filter((event) => event.title !== title);
    setEventData(updated);
    localStorage.setItem("events", JSON.stringify(updated));
  };

  const handleEdit = (id) => {
    // const updated = eventData.map((event) =>
    //   event.name === name ? { ...event, ...updates } : event
    // );
    // setEventData(updated);
    //localStorage.setItem("events", JSON.stringify(updated));
    navigate(`/EditEvent/${id}`, { replace: true }); // Redirect to homepage

  };

  const config = [
    { label: "Date", render: (event) => event.date },
    {
      label: "Time",
      render: (event) => event.from,
    },
    { label: "Title", render: (event) => event.title },
    {
      label: "Progress",
      render: (event) => <ProgressBar date={event.date} timeTo={event.to} timeFrom={event.from} />,
    },
    { label: "Status", 
      render: (event) => event.status
    },
    {
      label: "Actions",
      render: (event) => (
        <div className="flex gap-2 justify-center">
          <button
            className="text-blue-600 underline"
            onClick={() => handleEdit(event.id)}
          >
            Edit
          </button>
          <button
            className="text-red-600 underline"
            onClick={() => handleDelete(event.title)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    //get data from storage
    const eventData = localStorage.getItem("events");
    if (!eventData || eventData === "undefined") return null;
    setEventData(JSON.parse(eventData));

    console.log(eventData);

    //save data to state
  }, []);

  const keyFn = (event) => {
    return event.name;
  };
  
  console.log(eventData)
  if(!eventData ) {
    return 
    <div>No event data</div>
  } else {
    console.log(eventData)
    return (
      <div className="flex flex-col justify-center  p-6 w-full bg-gray-200">
        <div className="flex flex-col justify-center bg-white p-4">
        <h2>Events</h2>
        <h3>See and manage your event here</h3>
        <Table data={eventData} config={config} keyFn={keyFn} />
        </div>
      </div>
      )
  }
    
   



  
};
export default EventsView;
