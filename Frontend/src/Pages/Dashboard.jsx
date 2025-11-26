import React from "react";
import { Heart, Activity, Droplet, Zap, BarChart3 } from "lucide-react";

const Dashboard = () => {
  const vitals = [
    { icon: <Heart className="w-7 h-7 text-[#d94671]" />, label: "Heart Rate", value: "72 bpm", color: "from-[#fff5f7] to-[#f1f1f1]" },
    { icon: <Activity className="w-7 h-7 text-[#3b82f6]" />, label: "Blood Pressure", value: "120/80 mmHg", color: "from-[#f0f7ff] to-[#f1f1f1]" },
    { icon: <Droplet className="w-7 h-7 text-[#10b981]" />, label: "Blood Glucose", value: "95 mg/dL", color: "from-[#e9fff5] to-[#f1f1f1]" },
    { icon: <Zap className="w-7 h-7 text-[#8b5cf6]" />, label: "Temperature", value: "98.6°F", color: "from-[#f5e9ff] to-[#f1f1f1]" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 text-black">

      {/* ============================
          🔥 POWER BI FIRST (HERO SECTION)
      ============================ */}
      <div
        className="
          bg-gradient-to-br from-[#ffffff] via-[#f7f7f7] to-[#ececec]
          backdrop-blur-xl rounded-3xl p-10 border border-black/10
          shadow-[0_0_40px_rgba(0,0,0,0.07)]
          mb-14
        "
      >
        <div className="text-center mb-6">
          <div
            className="
              inline-flex p-6 rounded-full mb-6
              bg-gradient-to-br from-[#3b82f6] to-[#9333ea]
              border border-black/10
              shadow-[0_0_40px_rgba(147,51,234,0.28)]
            "
          >
            <BarChart3 className="w-16 h-16 text-white" />
          </div>

          <h2 className="text-4xl font-bold mb-3 text-black">Interactive Analytics Overview</h2>
          <p className="text-gray-600 text-lg">
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
            rounded-2xl border border-black/10
            shadow-[0_0_30px_rgba(0,0,0,0.1)]
          "
        ></iframe>
      </div>

      {/* ============================
          ❤️ VITAL CARDS BELOW POWER BI
      ============================ */}
      <div
        className="
          mb-10 text-center 
          bg-gradient-to-br from-[#ffffff] via-[#f6f6f6] to-[#eeeeee]
          backdrop-blur-2xl rounded-3xl p-8 border border-black/10
          shadow-[0_0_30px_rgba(0,0,0,0.08)]
        "
      >
        <h2 className="text-4xl font-bold mb-3 text-black">Patient Vital Statistics</h2>
        <p className="text-gray-600 text-lg">Quick health metrics updated in real-time.</p>
      </div>

      {/* ---- VITAL CARDS ---- */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 mb-10">
        {vitals.map((vital, index) => (
          <div
            key={index}
            className={`
              bg-gradient-to-br ${vital.color}
              backdrop-blur-xl rounded-2xl p-6 border border-black/10

              shadow-[0_0_20px_rgba(0,0,0,0.08)]
              hover:shadow-[0_0_40px_rgba(0,0,0,0.15)]
              transition-all duration-500 hover:-translate-y-2
            `}
          >
            <div
              className="
                w-14 h-14 rounded-2xl flex items-center justify-center mb-4
                bg-white border border-black/10
                shadow-[0_0_10px_rgba(0,0,0,0.08)]
              "
            >
              {vital.icon}
            </div>

            <p className="text-sm text-gray-600 mb-2 font-medium">{vital.label}</p>
            <p className="text-3xl font-bold text-black">{vital.value}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Dashboard;
