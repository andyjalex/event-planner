import NavBar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import Header from "../components/Header";

const CreateEventPage = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    id: Math.floor(Math.random() * 1000000),
    title: "",
    date: "",
    from: "",
    to: "",
    progress: 0,
    status: "pending"
  });

  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    console.log("hello handle ");
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingEvents = JSON.parse(localStorage.getItem("events")) || [];
    existingEvents.push(formData);
    localStorage.setItem("events", JSON.stringify(existingEvents));
    setShowConfirm(true);
    setTimeout(() => {
      setShowConfirm(false);
      navigate("/"); 
    }, 1000);
  };

  return (
    <div className="flex flex-row">
      <NavBar />
      <div className="flex-1 flex-col flex-grow justify-start items-center">
        <Header />
        <div className="flex flex-col bg-gray-900 w-full justify-around px-8 py-10">
          <Link to="/" className="text-white">Go Back</Link>
          <h2 className="text-white">Create Event</h2>
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
              Save
            </button>
            {showConfirm ? <div>Event saved successfully</div> : <div></div>}
          </form>
        </div>
      </div>
    </div>
  );
};
export default CreateEventPage;
