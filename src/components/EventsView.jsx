import { useState, useEffect } from "react";
import Table from "../components/Table";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";
const EventsView = () => {
  const [eventData, setEventData] = useState(null);
  const navigate = useNavigate();


  const handleDelete = (id) => {
    //filter the events data to remove the event with the Id. 
    const updated = eventData.filter((event) => event.id !== id);
    setEventData(updated);
    //reset the events object in local storage
    localStorage.setItem("events", JSON.stringify(updated));
  };

  const handleEdit = (id) => {
    //navigate to the edit event screen and pass the id of the event  
    navigate(`/EditEvent/${id}`, { replace: true }); // Redirect to homepage
  };

  //config object for the table component 
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
            onClick={() => handleDelete(event.id)}
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
    if (!eventData || eventData === "undefined") return;
    setEventData(JSON.parse(eventData));

  }, []);

  //get a key for the table component
  const keyFn = (event) => {
    return event.id;
  };
  
  if(!eventData ) {
    return <div className="flex justify-center items-center bg-gray-200"><h5 className="text-black">No event data yet!</h5></div>;
  } else {
    return (
      <div className="flex flex-col justify-center  md:p-6 w-full bg-gray-200">
        <div className="flex flex-col justify-center bg-white md:p-4">
        <h2>Events</h2>
        <h3>See and manage your event here</h3>
        <Table data={eventData} config={config} keyFn={keyFn} />
        </div>
      </div>
      )
  }
    
};
export default EventsView;
