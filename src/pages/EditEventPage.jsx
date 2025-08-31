import NavBar from "../components/Navbar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import placeholderprofile from "../assets/placeholder-profile.webp"

const EditEventPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    from: "",
    to: "",
    progress: 100,
    status: "pending"
  });

  const { id } = useParams();
  const [showConfirm, setShowConfirm] = useState(false);


  useEffect(() => {
    const events = JSON.parse(localStorage.getItem("events")) || [];
    const eventToEdit = events.find((e) => e.id.toString() === id);
    if (eventToEdit) setFormData(eventToEdit);
  }, [id]);

  const handleChange = (e) => {
    console.log("hello handle ");
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingEvents = JSON.parse(localStorage.getItem("events")) || [];

    console.log("existing", existingEvents);
    const updatedEvents = existingEvents.map((event) =>
      event.id.toString() === id ? { ...event, ...formData } : event
    );
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    setShowConfirm(true);
    setTimeout(() => {
      setShowConfirm(false);
      navigate("/events"); // redirect back to list
    }, 1000);
  };

  console.log(formData)
  return (
    <div className="flex flex-row">
      <NavBar />
      <div className="gb-grey-100 flex flex-col flex-grow justify-start items-center">
      <div className="flex flex-row p-4 w-full justify-end items-center bg-white">
          <div className="profilePicPlaceholder"><img src={placeholderprofile} /></div>
        </div>
        <div className="flex flex-col bg-gray-900 w-full justify-around px-8 py-20">
          <h2 className="text-white">Edit Event</h2>
          <form onSubmit={handleSubmit} className="text-white flex flex-col">
            <label htmlFor="title" className="w-full px-3 py-2">
              Title
            </label>
            <input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Sewing lesson"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500
            "
            ></input>
            <label htmlFor="date" className="w-full px-3 py-2">
              {" "}
              Select Date
            </label>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <FaCalendarAlt
                style={{
                  position: "absolute",
                  right: "8px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                  color: "#666",
                }}
              />
            </div>
            <label htmlFor="from" className="w-full px-3 py-2">
              From:
            </label>
            <div style={{ position: 'relative', display: 'inline-block' }}>
            <input
              type="time"
              id="from"
              name="from"
              value={formData.from}
              required
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
             <FaClock
                style={{
                  position: "absolute",
                  right: "8px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                  color: "#666",
                }}
              />
            </div>
            <label htmlFor="to" className="w-full px-3 py-2">
              To:
            </label>
            <div style={{ position: 'relative', display: 'inline-block' }}>
            <input
              type="time"
              id="to"
              name="to"
              value={formData.to}
              required
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaClock
                style={{
                  position: "absolute",
                  right: "8px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                  color: "#666",
                }}
              />
            </div>
            <button className=" w-full px-3 py-2 mt-8 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
              Update
            </button>
            {showConfirm ? <div>Event updated successfully</div> : <div></div>}
          </form>
        </div>
      </div>
    </div>
  );
};
export default EditEventPage;
