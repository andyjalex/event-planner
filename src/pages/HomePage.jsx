import NavBar from "../components/Navbar";
import EventsView from "../components/EventsView"

const HomePage = () => {
  return (
    <div className="flex flex-row">
      <NavBar />
      <div className="flex flex-col flex-grow justify-start items-center">
        <div className="flex flex-row p-4 w-full justify-between items-center bg-white">
          <input placeholder="Search" />
          icons
        </div>
        <div className="flex flex-row bg-gray-900 w-full justify-around px-8 py-20">
          <div className="flex flex-col w-1/2 p-4 m-2">
            <h2 className="text-xl text-white">Hello, Name</h2>
            <p className="text text-white">Create events and manager all your events here. No need to panic when you've set a timeline and seen it through</p>
            <button className="p-4 bg-blue-500 cursor-pointer my-4 rounded">Add Event Now</button>
          </div>
          <div className="flex flex-col w-1/2 text-xl text-white p-8">Calendar View </div>
        </div>
        <EventsView />
      </div>
    </div>
  );
};
export default HomePage;
