import React, { useState } from 'react';
import { Heart, Activity, Droplet, AlertCircle, CheckCircle, Info } from 'lucide-react';

const REQUIRED_FIELDS = ['age', 'sex'];
const ALL_FIELDS = [
  { name: 'age', label: 'Age', type: 'number', required: true },
  { name: 'sex', label: 'Sex', type: 'select', options: ['Male', 'Female'], required: true },
  { name: 'weight', label: 'Weight (kg)', type: 'number' },
  { name: 'height', label: 'Height (cm)', type: 'number' },
  { name: 'bmi', label: 'BMI', type: 'number' },
  { name: 'heart_rate', label: 'Heart Rate (bpm)', type: 'number' },
  { name: 'bp_systolic', label: 'BP Systolic (mmHg)', type: 'number' },
  { name: 'bp_diastolic', label: 'BP Diastolic (mmHg)', type: 'number' },
  { name: 'blood_sugar', label: 'Blood Sugar (mg/dL)', type: 'number' },
  { name: 'HbA1c', label: 'HbA1c (%)', type: 'number' },
  { name: 'cholesterol', label: 'Cholesterol (mg/dL)', type: 'number' },
  { name: 'LDL_C', label: 'LDL C (mg/dL)', type: 'number' },
  { name: 'HDL_C', label: 'HDL C (mg/dL)', type: 'number' },
  { name: 'Triglycerides', label: 'Triglycerides (mg/dL)', type: 'number' },
  { name: 'exercise_hours', label: 'Exercise Hours/Week', type: 'number' },
  { name: 'smoking', label: 'Smoking', type: 'select', options: ['No', 'Yes'] },
  { name: 'alcohol_consumption', label: 'Alcohol Consumption', type: 'select', options: ['None','Light','Moderate','Heavy'] },
];

const Prediction = () => {
  const [formData, setFormData] = useState(
    ALL_FIELDS.reduce((acc, f) => ({ ...acc, [f.name]: '' }), {})
  );
  const [predictions, setPredictions] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePredict = async () => {
    setLoading(true);
    setError(null);

    try {
      const payload = { ...formData };
      if (payload.sex) payload.sex = payload.sex === 'Male' ? 0 : 1;

      const res = await fetch('http://localhost:5001/api/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Prediction failed');
      setPredictions(data.predictions);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getRiskColor = (prediction) => {
    if (!prediction) return 'bg-gray-100 text-gray-800';
    const pred = prediction.toString().toLowerCase();
    if (pred === 'normal' || pred === 'no') return 'bg-green-100 text-green-800 border-green-200';
    if (pred.includes('pre') || pred === 'borderline') return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    if (pred === 'diabetes' || pred === 'hypertension' || pred === 'yes') return 'bg-red-100 text-red-800 border-red-200';
    return 'bg-blue-100 text-blue-800 border-blue-200';
  };

  const getConfidenceColor = (confidence) => {
    if (!confidence) return 'bg-gray-200';
    if (confidence >= 80) return 'bg-green-500';
    if (confidence >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-50 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold mb-6 flex items-center space-x-3 text-blue-700">
          <Heart className="w-8 h-8 text-red-500" /> Disease Risk Classifier
        </h1>

        {/* Input Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {ALL_FIELDS.map(f => (
            <div key={f.name} className="relative">
              <label className="block text-sm font-medium mb-1">
                {f.label}
                {f.required && <span className="text-red-500 ml-1">*</span>}
                {!f.required && <Info className="w-4 h-4 inline ml-1 text-gray-400" title="Optional field" />}
              </label>
              {f.type === 'select' ? (
                <select
                  name={f.name}
                  value={formData[f.name]}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition"
                >
                  <option value="">Select</option>
                  {f.options.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              ) : (
                <input
                  type={f.type}
                  name={f.name}
                  value={formData[f.name]}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition"
                />
              )}
            </div>
          ))}
        </div>

        <button
          onClick={handlePredict}
          disabled={loading || !formData.age || !formData.sex}
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          {loading ? 'Analyzing...' : 'Classify Risk'}
        </button>

        {error && (
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-lg">
            {error}
          </div>
        )}

        {/* Predictions */}
        {predictions && (
          <div className="mt-8 space-y-6">
            {Object.entries(predictions).map(([disease, models]) => (
              <div key={disease} className="bg-gradient-to-r from-gray-50 via-white to-gray-50 p-5 rounded-xl shadow-md border border-gray-200">
                <h2 className="font-bold text-xl mb-3 text-blue-600">{disease.replace('_Class','')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.entries(models).map(([modelType, result]) => (
                    <div key={modelType} className="p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-white">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-700">{modelType}</span>
                        {result.error ? (
                          <span className="text-red-600 text-xs">{result.error}</span>
                        ) : (
                          <span className={`text-xs px-2 py-1 rounded-full border ${getRiskColor(result.prediction)}`}>
                            {result.prediction}
                          </span>
                        )}
                      </div>

                      {!result.error && (
                        <>
                          {result.confidence && (
                            <div className="mb-2 text-xs">
                              Confidence: {result.confidence.toFixed(1)}%
                              <div className="w-full bg-gray-200 h-2 rounded mt-1">
                                <div className={`h-2 rounded ${getConfidenceColor(result.confidence)}`} style={{ width: `${result.confidence}%` }}></div>
                              </div>
                            </div>
                          )}

                          {result.probabilities && (
                            <div className="text-xs">
                              Probabilities:
                              {Object.entries(result.probabilities).map(([cls, prob]) => (
                                <div key={cls} className="flex justify-between">
                                  <span>{cls}</span>
                                  <span>{prob.toFixed(1)}%</span>
                                </div>
                              ))}
                            </div>
                          )}

                          <div className="text-gray-400 text-xs mt-2">Model Used: {result.model_used}</div>
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
