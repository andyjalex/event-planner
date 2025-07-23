import NavBar from "../components/Navbar";
import { useState } from "react";

const CreateEventPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    from: "",
    to: "",
  });

  const handleChange = (e) => {
    console.log('hello handle ')
    setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));

      console.log(formData)
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hello handle')
  }

  return (
    <div className="flex flex-row">
      <NavBar />
      <div className="gb-grey-100 flex flex-col flex-grow justify-start items-center">
        <div className="flex flex-row p-4 w-full justify-between items-center bg-white">
          <input placeholder="Search" />
          icons
        </div>
        <div className="flex flex-col bg-gray-900 w-full justify-around px-8 py-20">
          <h2 className="text-white">Create Event</h2>
          <form onSubmit={handleSubmit} className="text-white flex flex-col">
            <label htmlFor="title" className="w-full px-3 py-2">
              Title
            </label>
            <input
              id="title"
              name="title"
              placeholder="Sewing lesson"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500
            "
            ></input>
            <label htmlFor="date" className="w-full px-3 py-2">
              {" "}
              Select Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <label htmlFor="from" className="w-full px-3 py-2">From:</label>
            <input
              type="time"
              id="from"
              name="from"
              value={formData.from}
              required
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="to" className="w-full px-3 py-2">To:</label>
            <input
              type="time"
              id="to"
              name="to"
              value={formData.to}
              required
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className=" w-full px-3 py-2 mt-8 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CreateEventPage;
