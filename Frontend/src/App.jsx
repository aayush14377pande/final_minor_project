import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Prediction from "./Pages/Prediction";
import React from "react";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#ffffff] via-[#f7f7f7] to-[#eaeaea] text-black">
      <Header />

      <main className="flex-grow container mx-auto px-6 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/prediction" element={<Prediction />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
