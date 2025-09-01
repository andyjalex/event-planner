import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react"
import NavBar from "../components/Navbar";
import EventsView from "../components/EventsView"
import "../index.css";
import Header from "../components/Header";
import CalendarView from "../components/CalendarView";



const HomePage = () => {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("")

  useEffect(() => {
    //get username from localstorage 
    const user = localStorage.getItem("user");
    if (!user || user === "undefined") return null;
    //set username to state 
    setUserEmail(JSON.parse(user))
  }, [])
  
  //function for navigating to CreateEvent screen. 
  const handleAddEvent = () => {
    //navigate to the create event page 
    navigate("/createEvent", { replace: true }); // Redirect to homepage
  }

  return (
    <div className="flex flex-row">
      <NavBar />
      <div className="flex-1 flex-col flex-grow justify-start items-center">
        <Header />
        <div className="flex flex-col sm:flex-row bg-gray-900 justify-around">
          <div className="flex flex-col w-full sm:w-full md:w-1/3 p-2 md:p-8 ">
            <h2 className="text-xl text-white ">Hello, {userEmail}</h2>
            <p className="text text-white">Create events and manager all your events here. No need to panic when you've set a timeline and seen it through</p>
            <button onClick={handleAddEvent}className="p-4 bg-blue-500 cursor-pointer my-4 rounded">Add Event Now</button>
          </div>
          <div className="flex flex-col w-full sm:w-full sm:p-0 md:w-2/3 md:p-8 items-center">
          <CalendarView />
          </div>
        </div>
        <EventsView />
      </div>
    </div>
  );
};
export default HomePage;
