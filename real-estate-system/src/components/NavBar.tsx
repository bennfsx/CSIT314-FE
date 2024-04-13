import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 text-white shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-lg font-semibold">
            <Link to="/" className="text-white hover:text-blue-300">
              Real Estate App
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none sm:hidden"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path fillRule="evenodd" d="M18 12H6" />
              ) : (
                <path fillRule="evenodd" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <div className={`${isOpen ? "block" : "hidden"} sm:flex`}>
            <Link
              to="/login"
              className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
