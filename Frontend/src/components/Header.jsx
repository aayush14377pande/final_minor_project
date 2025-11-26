import { Link, useLocation } from "react-router-dom";
import React from "react";
import { Activity } from "lucide-react";

const Header = () => {
  const location = useLocation();

  const linkClass = (path) =>
    `px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
      location.pathname === path
        ? "bg-gradient-to-r from-[#3b82f6]/30 via-[#8b5cf6]/30 to-[#1a1a1a] text-white shadow-xl scale-105"
        : "text-gray-300 hover:text-white hover:bg-white/10"
    }`;

  return (
    <header
      className="
        /* 🎨 Add color tint to header background */
        bg-gradient-to-br from-[#000000] via-[#0a0a0a] to-[#111111]
        backdrop-blur-xl sticky top-0 z-50 border-b border-white/10

        /* ⚡ White glow + Blue/Purple tint glow */
        shadow-[0_0_75px_rgba(255,255,255,0.25),0_0_50px_rgba(115,108,254,0.35)]
      "
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-5 px-6 gap-4">

        {/* ICON BOX */}
        <div className="flex items-center space-x-3">
          <div
            className="
              bg-gradient-to-br from-[#000000] via-[#0a0a0a] to-[#1a1a1a]
              p-3 rounded-2xl border border-white/10

              /* 🔵 Aqua + white glow */
              shadow-[0_0_60px_rgba(52,211,153,0.55),0_0_45px_rgba(255,255,255,0.45)]
            "
          >
            <Activity className="w-7 h-7 text-[#34D399]" />   {/* Mint Green Icon */}
          </div>

          <div>
            <h1 className="text-lg md:text-xl font-bold text-white">
              Heart Disease Analytics
            </h1>
            <p className="text-xs text-gray-400">ML & Power BI Integration</p>
          </div>
        </div>

        {/* NAV LINKS */}
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
