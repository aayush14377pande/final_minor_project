import React from "react";
import { Heart, BarChart3, Brain, TrendingUp } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <BarChart3 className="w-10 h-10 text-[#60A5FA]" />,   // Blue
      title: "Patient Trends",
      description: "Visualize historical health data and identify patterns over time with advanced analytics",
      gradient: "from-[#1e3a8a] to-[#3b82f6]",  // Navy → Blue
      glow: "shadow-[0_0_45px_rgba(96,165,250,0.7)]"
    },
    {
      icon: <Brain className="w-10 h-10 text-[#A78BFA]" />,   // Purple
      title: "AI Predictions",
      description: "Leverage machine learning models to predict heart disease risk with high accuracy",
      gradient: "from-[#6d28d9] to-[#a78bfa]",  // Deep Purple → Light Purple
      glow: "shadow-[0_0_45px_rgba(167,139,250,0.7)]"
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-[#34D399]" />,  // Mint Green
      title: "Real-time Insights",
      description: "Get instant feedback and actionable health recommendations based on current data",
      gradient: "from-[#065f46] to-[#34d399]",  // Dark Emerald → Mint Green
      glow: "shadow-[0_0_45px_rgba(52,211,153,0.7)]"
    }
  ];

  return (
    <section className="text-center max-w-6xl mx-auto">

      {/* TOP CARD */}
      <div
        className="
          mb-16 bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#000000]
          backdrop-blur-xl rounded-3xl p-12 border border-white/10

          shadow-[0_0_65px_rgba(255,255,255,0.25)]
        "
      >
        <div
          className="
            inline-block p-4 rounded-full mb-6 border border-white/10

            bg-gradient-to-br from-[#3b82f6] to-[#9333ea]
            shadow-[0_0_70px_rgba(147,51,234,0.55)]
          "
        >
          <Heart className="w-16 h-16 text-white" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Predictive Analytics for Personalized Heart Disease Estimation
        </h2>

        <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
          This platform leverages time series data and AI models to analyze and predict patient health outcomes.
          Empowering healthcare professionals to detect trends, assess risk, and make informed medical decisions.
        </p>
      </div>

      {/* FEATURE CARDS */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`
              group backdrop-blur-xl rounded-3xl p-8 border border-white/10
              bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a]

              ${feature.glow}

              hover:shadow-[0_0_90px_rgba(255,255,255,0.4)]
              transition-all duration-500 hover:border-white/30 hover:-translate-y-3
            `}
          >

            {/* ICON BOX */}
            <div
              className={`
                inline-flex p-5 rounded-2xl mb-6 border border-white/10
                bg-gradient-to-br ${feature.gradient}

                ${feature.glow}
                group-hover:scale-110 transition-transform duration-300
              `}
            >
              {feature.icon}
            </div>

            <h3 className="font-bold text-2xl text-white mb-4">{feature.title}</h3>
            <p className="text-gray-300 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Home;
