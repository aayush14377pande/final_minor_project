import React, { useState } from "react";
import { Heart, Activity, Info } from "lucide-react";

const REQUIRED_FIELDS = ["age", "sex"];

const ALL_FIELDS = [
  { name: "age", label: "Age", type: "number", required: true },
  { name: "sex", label: "Sex", type: "select", options: ["Male", "Female"], required: true },
  { name: "weight", label: "Weight (kg)", type: "number" },
  { name: "height", label: "Height (cm)", type: "number" },
  { name: "bmi", label: "BMI", type: "number" },
  { name: "heart_rate", label: "Heart Rate (bpm)", type: "number" },
  { name: "bp_systolic", label: "BP Systolic (mmHg)", type: "number" },
  { name: "bp_diastolic", label: "BP Diastolic (mmHg)", type: "number" },
  { name: "blood_sugar", label: "Blood Sugar (mg/dL)", type: "number" },
  { name: "HbA1c", label: "HbA1c (%)", type: "number" },
  { name: "cholesterol", label: "Cholesterol (mg/dL)", type: "number" },
  { name: "LDL_C", label: "LDL C (mg/dL)", type: "number" },
  { name: "HDL_C", label: "HDL C (mg/dL)", type: "number" },
  { name: "Triglycerides", label: "Triglycerides (mg/dL)", type: "number" },
  { name: "exercise_hours", label: "Exercise Hours/Week",required: true , type: "number" },
  { name: "smoking", label: "Smoking", type: "select", options: ["No", "Yes"] },
  { name: "alcohol_consumption", label: "Alcohol Consumption",required: true , type: "select", options: ["None", "Light", "Moderate", "Heavy"] },
];

const Prediction = () => {
  const [formData, setFormData] = useState(
    ALL_FIELDS.reduce((acc, f) => ({ ...acc, [f.name]: "" }), {})
  );
  const [predictions, setPredictions] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handlePredict = async () => {
    setLoading(true);
    setError(null);

    try {
      const payload = { ...formData };
      if (payload.sex) payload.sex = payload.sex === "Male" ? 0 : 1;

      const res = await fetch("http://localhost:5001/api/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Prediction failed");

      setPredictions(data.predictions);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto text-white">

      {/* TOP SECTION CARD WITH STRONG SHADOW */}
      <div
        className="
          bg-gradient-to-br from-[#0d0d0d] via-[#111111] to-[#1a1a1a]
          rounded-3xl p-10 border border-white/10 backdrop-blur-xl

          /* 🌟 Beautiful white + blue glow */
          shadow-[0_0_70px_rgba(255,255,255,0.18),0_0_55px_rgba(96,165,250,0.25)]
        "
      >
        <div className="text-center mb-10">
          <div
            className="
              inline-flex p-5 rounded-full mb-5
              bg-gradient-to-br from-[#1e3a8a] to-[#7c3aed]
              border border-white/10

              /* Icon glow */
              shadow-[0_0_45px_rgba(147,51,234,0.45)]
            "
          >
            <Heart className="w-14 h-14 text-white" />
          </div>

          <h1 className="text-4xl font-bold">Disease Risk Classifier</h1>
          <p className="text-gray-300 mt-2">Enter patient details to evaluate risk levels.</p>
        </div>

        {/* FORM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {ALL_FIELDS.map((f) => (
            <div key={f.name}>
              <label className="block text-sm mb-2 text-gray-300 font-semibold">
                {f.label}
                {f.required && <span className="text-blue-400 ml-1">*</span>}
              </label>

              {f.type === "select" ? (
                <select
                  name={f.name}
                  value={formData[f.name]}
                  onChange={handleChange}
                  className="
                    w-full px-4 py-3 rounded-xl bg-[#0f0f0f]/70 text-white
                    border border-white/10
                    focus:ring-2 focus:ring-blue-500/40

                    /* Soft inside glow */
                    shadow-[inset_0_0_25px_rgba(255,255,255,0.05)]
                  "
                >
                  <option value="">Select</option>
                  {f.options.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={f.type}
                  name={f.name}
                  value={formData[f.name]}
                  onChange={handleChange}
                  className="
                    w-full px-4 py-3 rounded-xl bg-[#0f0f0f]/70 text-white
                    border border-white/10
                    focus:ring-2 focus:ring-blue-500/40
                    shadow-[inset_0_0_25px_rgba(255,255,255,0.05)]
                  "
                />
              )}
            </div>
          ))}
        </div>

        {/* BUTTON WITH NICE SHADOW */}
        <button
          onClick={handlePredict}
          disabled={loading || !formData.age || !formData.sex}
          className="
            w-full py-4 rounded-2xl font-bold text-lg text-white
            bg-gradient-to-r from-[#2563eb] to-[#7c3aed]

            /* Button glow */
            shadow-[0_0_35px_rgba(124,58,237,0.45)]

            hover:shadow-[0_0_55px_rgba(124,58,237,0.6)]
            hover:scale-[1.02]
            transition disabled:opacity-50
          "
        >
          {loading ? "Analyzing..." : "Classify Risk"}
        </button>

        {/* ERROR BOX */}
        {error && (
          <div className="mt-6 p-4 rounded-xl border border-red-500/40 bg-red-500/10 text-red-300 shadow-[0_0_20px_rgba(255,0,0,0.25)]">
            {error}
          </div>
        )}

        {/* RESULTS */}
        {predictions && (
          <div className="mt-10 space-y-8">
            {Object.entries(predictions).map(([disease, models]) => (
              <div
                key={disease}
                className="
                  p-6 rounded-2xl bg-[#0f0f0f]/60 border border-white/10
                  shadow-[0_0_45px_rgba(96,165,250,0.2)]
                "
              >
                <h2 className="font-bold text-2xl mb-5 flex items-center gap-2">
                  <Activity className="w-6 h-6 text-blue-400" />
                  {disease.replace("_Class", "")}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {Object.entries(models).map(([modelType, result]) => (
                    <div
                      key={modelType}
                      className="
                        p-5 rounded-xl bg-[#000]/40 border border-white/10

                        /* Card glow */
                        shadow-[0_0_35px_rgba(124,58,237,0.25)]

                        hover:shadow-[0_0_55px_rgba(124,58,237,0.4)]
                        hover:-translate-y-1 transition
                      "
                    >
                      <div className="flex justify-between mb-3">
                        <span className="font-semibold">{modelType}</span>

                        {result.error ? (
                          <span className="text-red-400 text-xs">{result.error}</span>
                        ) : (
                          <span className="
                            px-3 py-1 text-xs font-bold rounded-full
                            bg-gradient-to-r from-blue-500 to-purple-500
                          ">
                            {result.prediction}
                          </span>
                        )}
                      </div>

                      {!result.error && (
                        <>
                          {/* Confidence bar */}
                          {result.confidence && (
                            <div className="mb-3">
                              <div className="flex justify-between text-xs mb-1">
                                <span className="text-gray-400">Confidence</span>
                                <span>{result.confidence.toFixed(1)}%</span>
                              </div>

                              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                                <div
                                  className="
                                    h-3 bg-gradient-to-r from-blue-400 to-purple-500
                                    shadow-[0_0_15px_rgba(124,58,237,0.35)]
                                  "
                                  style={{ width: `${result.confidence}%` }}
                                ></div>
                              </div>
                            </div>
                          )}

                          {/* Probabilities */}
                          {result.probabilities && (
                            <div className="text-xs space-y-1 mt-3">
                              {Object.entries(result.probabilities).map(([cls, prob]) => (
                                <div key={cls} className="flex justify-between">
                                  <span>{cls}</span>
                                  <span className="font-bold">{prob.toFixed(1)}%</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Prediction;
