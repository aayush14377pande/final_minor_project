import React from "react";

const Footer = () => {
  return (
    <footer
      className="
        bg-gradient-to-br from-[#ffffff] via-[#f8f8f8] to-[#ededed]
        backdrop-blur-xl 
        border-t border-black/10 
        py-6 
        shadow-[0_-5px_20px_rgba(0,0,0,0.06)]
      "
    >
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-700 text-sm">
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
