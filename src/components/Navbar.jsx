import { NavLink } from "react-router-dom";

export default function NavBar() {
    //lg:flex-row
  return (
    <nav className="bg-white pt-16 py-3 flex flex-col justify-start items-center w-60 hidden lg:flex">
      <ul className="flex flex-col items-center">
        <li className="m-1">
          <NavLink to="/"className={({ isActive }) => 
              isActive ? "text-blue-600 font-bold" : "text-gray-700"
            }
          >Home</NavLink>
        </li>
        <li className="m-1">
          <NavLink to="/createEvent" 
              className={({ isActive }) => 
              isActive ? "text-blue-600 font-bold" : "text-gray-700"
            }>Create Event</NavLink>
        </li>
        <li className="m-1">
          <NavLink to="/help" className={({ isActive }) => 
              isActive ? "text-blue-600 font-bold" : "text-gray-700"
            }
          >Help</NavLink>
        </li>
      </ul>
    </nav>
  );
}
