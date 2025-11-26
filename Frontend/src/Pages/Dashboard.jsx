import React from "react";
import { Heart, Activity, Droplet, Zap, BarChart3 } from "lucide-react";

const Dashboard = () => {
  const vitals = [
    { icon: <Heart className="w-7 h-7 text-[#F472B6]" />, label: "Heart Rate", value: "72 bpm", color: "from-[#2d0a11] to-[#1a1a1a]" },
    { icon: <Activity className="w-7 h-7 text-[#60A5FA]" />, label: "Blood Pressure", value: "120/80 mmHg", color: "from-[#0a1a2d] to-[#1a1a1a]" },
    { icon: <Droplet className="w-7 h-7 text-[#34D399]" />, label: "Blood Glucose", value: "95 mg/dL", color: "from-[#0a2d1a] to-[#1a1a1a]" },
    { icon: <Zap className="w-7 h-7 text-[#A78BFA]" />, label: "Temperature", value: "98.6°F", color: "from-[#1d0a2d] to-[#1a1a1a]" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 text-white">

      {/* ============================
          🔥 POWER BI FIRST (HERO SECTION)
      ============================ */}
      <div
        className="
          bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a]
          backdrop-blur-xl rounded-3xl p-10 border border-white/10
          shadow-[0_0_70px_rgba(147,51,234,0.25),0_0_40px_rgba(255,255,255,0.15)]
          mb-14
        "
      >
        <div className="text-center mb-6">
          <div
            className="
              inline-flex p-6 rounded-full mb-6
              bg-gradient-to-br from-[#3b82f6] to-[#9333ea]
              border border-white/10
              shadow-[0_0_75px_rgba(147,51,234,0.45)]
            "
          >
            <BarChart3 className="w-16 h-16 text-white" />
          </div>

          <h2 className="text-4xl font-bold mb-3">Interactive Analytics Overview</h2>
          <p className="text-gray-300 text-lg">
            Power BI insights visualizing patient trends and metrics.
          </p>
        </div>

        <iframe
          title="Minor Project Dashboard"
          width="100%"
          height="540"
          src="https://app.powerbi.com/reportEmbed?reportId=66d24b05-88a4-4d32-8c0e-a7febd1f5e02&autoAuth=true&ctid=0ed51ad7-52cc-4234-b54a-76b82d40b5c3"
          frameBorder="0"
          allowFullScreen
          className="
            rounded-2xl border border-white/10
            shadow-[0_0_50px_rgba(255,255,255,0.22)]
          "
        ></iframe>
      </div>

      {/* ============================
          ❤️ VITAL CARDS BELOW POWER BI
      ============================ */}
      <div
        className="
          mb-10 text-center 
          bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#0a0a0a]
          backdrop-blur-2xl rounded-3xl p-8 border border-white/10
          shadow-[0_0_55px_rgba(255,255,255,0.18),0_0_35px_rgba(96,165,250,0.25)]
        "
      >
        <h2 className="text-4xl font-bold mb-3">Patient Vital Statistics</h2>
        <p className="text-gray-300 text-lg">
          Quick health metrics updated in real-time.
        </p>
      </div>

      {/* ---- VITAL CARDS ---- */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 mb-10">
        {vitals.map((vital, index) => (
          <div
            key={index}
            className={`
              bg-gradient-to-br ${vital.color}
              backdrop-blur-xl rounded-2xl p-6 border border-white/10

              shadow-[0_0_30px_rgba(255,255,255,0.14)]
              hover:shadow-[0_0_60px_rgba(255,255,255,0.25)]
              transition-all duration-500 hover:-translate-y-2
            `}
          >
            <div
              className="
                w-14 h-14 rounded-2xl flex items-center justify-center mb-4
                bg-black/40 border border-white/10
                shadow-[0_0_20px_rgba(255,255,255,0.2)]
              "
            >
              {vital.icon}
            </div>

            <p className="text-sm text-gray-400 mb-2 font-medium">{vital.label}</p>
            <p className="text-3xl font-bold text-white">{vital.value}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Dashboard;
