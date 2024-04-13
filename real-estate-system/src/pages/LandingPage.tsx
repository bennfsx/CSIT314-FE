import React from "react";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
  return (
    <div>
      <div className="bg-blue-500 text-white text-center py-20">
        <h1 className="text-4xl font-bold">Welcome to Real Estate App</h1>
        <p className="mt-4 text-lg">
          Your one-stop solution for buying, selling, and managing properties.
        </p>
        <div className="mt-6">
          <Link
            to="/signup"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg mx-2"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-lg"
          >
            Login
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">For Buyers</h2>
            <p>
              View and manage a shortlist of your favorite properties. Calculate
              mortgage to understand your budget.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">For Sellers</h2>
            <p>
              Track interest in your properties through views and shortlists.
              Connect with agents to enhance selling.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">For Real Estate Agents</h2>
            <p>
              Manage property listings efficiently. Get rated and reviewed by
              customers to build your reputation.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">For System Admins</h2>
            <p>
              Oversee the platform, manage user accounts, and ensure smooth
              operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
