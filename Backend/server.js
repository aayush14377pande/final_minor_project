import express from "express";
import cors from "cors";

const app = express();

// Enable CORS for frontend
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173'], // React dev servers
  credentials: true
}));

app.use(express.json());

const FLASK_URL = "http://localhost:5001/api/predict";

// Health check endpoint
app.get("/api/health", async (req, res) => {
  try {
    const response = await fetch("http://localhost:5001/api/health");
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("❌ Flask backend not reachable:", err.message);
    res.status(503).json({ 
      error: "Flask backend not available",
      message: "Make sure Flask is running on port 5001"
    });
  }
});

// Prediction endpoint - proxy to Flask
app.post("/api/predict", async (req, res) => {
  try {
    console.log("\n📨 Received prediction request");
    console.log("Request body:", JSON.stringify(req.body, null, 2));
    
    const response = await fetch(FLASK_URL, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(req.body),
    });

    console.log(`Flask response status: ${response.status}`);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Flask returned error:", response.status);
      console.error("Error details:", errorText);
      return res.status(response.status).json({ 
        error: `Flask backend error: ${response.status}`,
        details: errorText
      });
    }

    const data = await response.json();
    console.log("✅ Prediction successful");
    console.log("Response:", JSON.stringify(data, null, 2));
    res.json(data);

  } catch (err) {
    console.error("❌ Proxy Error:", err.message);
    console.error("Stack:", err.stack);
    res.status(500).json({ 
      error: "Failed to connect to Flask backend",
      message: "Make sure Flask is running on port 5001",
      details: err.message
    });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log("\n" + "=".repeat(50));
  console.log("🚀 Proxy Server Running");
  console.log("=".repeat(50));
  console.log(`📍 Port: ${PORT}`);
  console.log(`🔗 Endpoint: http://localhost:${PORT}/api/predict`);
  console.log(`🔁 Forwarding to: ${FLASK_URL}`);
  console.log(`🏥 Health check: http://localhost:${PORT}/api/health`);
  console.log("=".repeat(50) + "\n");
});