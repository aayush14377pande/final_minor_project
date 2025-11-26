import { Link, useLocation } from "react-router-dom";
import React from "react";
import { Activity } from "lucide-react";

const Header = () => {
  const location = useLocation();

  const linkClass = (path) =>
    `px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
      location.pathname === path
        ? "bg-gradient-to-r from-[#93c5fd]/50 via-[#c4b5fd]/50 to-[#e5e7eb] text-black shadow-md scale-105 border border-black/10"
        : "text-gray-700 hover:text-black hover:bg-gray-200/60"
    }`;

  return (
    <header
      className="
        bg-gradient-to-br from-[#ffffff] via-[#f8f8f8] to-[#eaeaea]
        backdrop-blur-xl sticky top-0 z-50 border-b border-black/10
        shadow-[0_2px_20px_rgba(0,0,0,0.08)]
      "
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-5 px-6 gap-4">

        {/* ICON + TITLE */}
        <div className="flex items-center space-x-3">
          <div
            className="
              bg-white p-3 rounded-2xl border border-black/10
              shadow-[0_0_15px_rgba(0,0,0,0.08)]
            "
          >
            <Activity className="w-7 h-7 text-[#34D399]" />
          </div>

          <div>
            <h1 className="text-lg md:text-xl font-bold text-black">
              Heart Disease Analytics
            </h1>
            <p className="text-xs text-gray-600">ML & Power BI Integration</p>
          </div>
        </div>

        {/* NAVIGATION LINKS */}
        <nav className="flex space-x-2">
          <Link to="/" className={linkClass("/")}>Home</Link>
          <Link to="/dashboard" className={linkClass("/dashboard")}>Dashboard</Link>
          <Link to="/prediction" className={linkClass("/prediction")}>Prediction</Link>
        </nav>

      </div>
    </header>
  );
};

export default Header;
