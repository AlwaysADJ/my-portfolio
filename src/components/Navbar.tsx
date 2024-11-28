import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-800 text-white">
      {/* Logo Section */}
      <div className="text-xl font-semibold">
        <Link to="/">Joshua Adenuga</Link> {/* Link to the homepage */}
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6">
        <li>
          <Link
            to="/projects"
            className="hover:text-blue-200 transition-colors duration-300"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="hover:text-blue-200 transition-colors duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="hover:text-blue-200 transition-colors duration-300"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
