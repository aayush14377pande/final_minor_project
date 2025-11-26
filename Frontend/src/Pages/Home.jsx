import React from "react";
import { Heart, BarChart3, Brain, TrendingUp } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <BarChart3 className="w-10 h-10 text-[#2563eb]" />,
      title: "Patient Trends",
      description: "Visualize historical health data and identify patterns over time with advanced analytics",
      gradient: "from-[#dbeafe] to-[#93c5fd]",   // Light blues
      glow: "shadow-[0_0_25px_rgba(59,130,246,0.35)]"
    },
    {
      icon: <Brain className="w-10 h-10 text-[#7c3aed]" />,
      title: "AI Predictions",
      description: "Leverage machine learning models to predict heart disease risk with high accuracy",
      gradient: "from-[#ede9fe] to-[#ddd6fe]",  // Soft purple tones
      glow: "shadow-[0_0_25px_rgba(124,58,237,0.35)]"
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-[#059669]" />,
      title: "Real-time Insights",
      description: "Get instant feedback and actionable health recommendations based on current data",
      gradient: "from-[#d1fae5] to-[#a7f3d0]",  // Light greens
      glow: "shadow-[0_0_25px_rgba(16,185,129,0.35)]"
    }
  ];

  return (
    <section className="text-center max-w-6xl mx-auto">

      {/* =======================
          HERO TOP CARD (LIGHT)
      ======================= */}
      <div
        className="
          mb-16 bg-gradient-to-br from-[#ffffff] via-[#f7f7f7] to-[#eeeeee]
          backdrop-blur-xl rounded-3xl p-12 border border-black/10

          shadow-[0_0_40px_rgba(0,0,0,0.1)]
        "
      >
        <div
          className="
            inline-block p-4 rounded-full mb-6 border border-black/10

            bg-gradient-to-br from-[#3b82f6] to-[#9333ea]
            shadow-[0_0_55px_rgba(147,51,234,0.35)]
          "
        >
          <Heart className="w-16 h-16 text-white" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
          Predictive Analytics for Personalized Heart Disease Estimation
        </h2>

        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          This platform leverages time series data and AI models to analyze and predict patient health outcomes.
          Empowering healthcare professionals to detect trends, assess risk, and make informed medical decisions.
        </p>
      </div>

      {/* =======================
          FEATURE CARDS (LIGHT)
      ======================= */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`
              group backdrop-blur-xl rounded-3xl p-8 border border-black/10
              bg-gradient-to-br from-[#ffffff] to-[#f2f2f2]

              ${feature.glow}

              hover:shadow-[0_0_60px_rgba(0,0,0,0.15)]
              transition-all duration-500 hover:border-black/30 hover:-translate-y-3
            `}
          >

            {/* ICON BOX */}
            <div
              className={`
                inline-flex p-5 rounded-2xl mb-6 border border-black/10
                bg-gradient-to-br ${feature.gradient}

                ${feature.glow}
                group-hover:scale-110 transition-transform duration-300
              `}
            >
              {feature.icon}
            </div>

            <h3 className="font-bold text-2xl text-black mb-4">{feature.title}</h3>
            <p className="text-gray-700 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Home;
