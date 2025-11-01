import React, { useState } from "react";
import { Brain, Upload } from "lucide-react";

function Prediction() {
  const [dragActive, setDragActive] = useState(false);

  return (
    <section className="max-w-2xl mx-auto">
      <div className="text-center mb-10">
        <div className="inline-flex p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mb-4">
          <Brain className="w-12 h-12 text-purple-600" />
        </div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          AI Diagnosis Prediction
        </h2>
        <p className="text-gray-600 text-lg">
          Upload patient time series data to receive AI-driven diagnostic predictions and actionable insights.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div
          className={`border-3 border-dashed rounded-xl p-12 text-center transition-all duration-200 ${
            dragActive
              ? "border-purple-500 bg-purple-50"
              : "border-gray-300 bg-gray-50 hover:border-purple-400 hover:bg-purple-25"
          }`}
          onDragEnter={() => setDragActive(true)}
          onDragLeave={() => setDragActive(false)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            setDragActive(false);
          }}
        >
          <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-lg font-semibold text-gray-700 mb-2">Drop your CSV file here</p>
          <p className="text-sm text-gray-500 mb-6">or click to browse</p>
          <input
            type="file"
            accept=".csv"
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-8 py-3 rounded-xl cursor-pointer hover:from-purple-700 hover:to-pink-700 transition-all duration-200 hover:scale-105 shadow-lg"
          >
            Select File
          </label>
        </div>

        <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg">
          Analyze & Predict
        </button>

        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
          <h4 className="font-semibold text-gray-800 mb-2">Supported Data Formats:</h4>
          <p className="text-sm text-gray-600">
            CSV files containing time series data such as ECG readings, vital signs, lab results, and patient monitoring data.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Prediction;