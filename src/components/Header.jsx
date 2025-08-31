import placeholderprofile from "../assets/placeholder-profile.webp";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex flex-col bg-white shadow-md">
      <div className="flex flex-row p-4 justify-between items-center bg-white">
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <div className="profilePicPlaceholder">
          <img src={placeholderprofile} />
        </div>
      </div>
      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="absolute left-0 z-100 top-0 w-full h-full bg-white">
             <div className="flex flex-row p-4 justify-between items-center bg-white">
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          </div>
          <ul className="flex flex-col items-center gap-4 pb-4 lg:hidden">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/createEvent" onClick={() => setIsOpen(false)}>
                Create Event
              </Link>
            </li>
            <li>
              <Link to="/help" onClick={() => setIsOpen(false)}>
                Help
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
