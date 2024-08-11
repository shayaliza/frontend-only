import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function LandingPage() {
  const loggedIn = useSelector((state) => state.user.loggedIn);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600 mb-8">
        Welcome to TechSnap
      </h1>
      {loggedIn == false ? (
        <div className="space-x-4">
          <Link
            to="/signin"
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-700"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-6 py-2 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-700"
          >
            Signup
          </Link>
        </div>
      ) : (
        <div className="space-x-4">
          <Link
            to="/dashboard/profile"
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-700"
          >
            Dashboard
          </Link>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
