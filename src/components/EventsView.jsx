import Table from "../components/Table";
const EventsView = () => {
  const data = [
    {
      date: "01/08/2025",
      progress: "bg-orange-500",
      time: "12:00",
      title: "Grace and Lees wedding",
      status: "Completed"
    },
    {
      date: "08/08/2025",
      progress: "bg-red-500",
      time: "12:00",
      title: "Get together",
      status: "Completed"
    },
    {
      date: "17/08/2025",
      progress: "bg-yellow-500",
      time: "12:00",
      title: "Jons suprise anniversary",
      status: "Completed"
    },
    {
      date: "24/08/2025",
      progress: "bg-green-500",
      time: "12:00",
      title: "Fun party for class two",
      status: "Completed"
    },
  ];

  const config = [
    { label: "Date", render: (event) => event.date },
    {
      label: "Time",
      render: (event) => event.time,
    },
    { label: "Title", render: (event) => event.title },
    {
      label: "Progress",
      render: (event) => <div className={`p-3 m-2 ${event.progress}`}></div>,
    },
    { label: "Status", render: (event) => event.status },
  ];

  const keyFn = (event) => {
    return event.name;
  };

  return (
    <div className="flex flex-col justify-center  p-6 w-full bg-gray-200">
        <h2>Events</h2>
        <h3>See and manage your event here</h3>
      <Table data={data} config={config} keyFn={keyFn} />
    </div>
  );
};
export default EventsView;
