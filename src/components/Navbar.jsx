import { Link } from "react-router-dom";

export default function NavBar() {
    //lg:flex-row
  return (
    <nav className="bg-white py-3 flex justify-center items-center h-screen w-60">
      <ul className="flex flex-col items-center">
        <li className="list-group-item m-1">
          <Link to="/">Home</Link>
        </li>
        <li className="list-group-item m-1">
          <Link to="/createEvent">Create Event</Link>
        </li>
        <li className="list-group-item m-1">
          <Link to="/help">About</Link>
        </li>
      </ul>
    </nav>
  );
}
