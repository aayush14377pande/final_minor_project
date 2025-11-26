import React from "react";
import { Activity } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="
        bg-gradient-to-br from-[#000000] via-[#0a0a0a] to-[#111111]
        backdrop-blur-xl 
        border-t border-white/10 
        py-6 
        shadow-[0_-5px_20px_rgba(255,255,255,0.06)]
      "
    >
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-300 text-sm">
          © 2024 Heart Disease Analytics Platform. Powered by Machine Learning & Power BI.
        </p>

        <p className="text-gray-500 text-xs mt-2">
          Empowering healthcare professionals with predictive insights.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
