const express = require("express");
const cors = require("cors");
const db = require("./config/db");

const app = express();
const port = 5050;

// ✅ CORS Configuration - Updated
const corsOptions = {
  origin: ["http://localhost:3000", "https://ipo-web-app-one.vercel.app"], // removed trailing slash
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Optional: Add manual headers as a fallback (only during debugging)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(express.json());

// Routes
const companyRoutes = require("./routes/companyRoutes");
const ipoRoutes = require("./routes/ipoRoutes");
const documentRoutes = require("./routes/documentRoutes");

// Mount routes
app.use("/api/companies", companyRoutes);
app.use("/api/ipo", ipoRoutes);
app.use("/api/documents", documentRoutes);

// Test route to verify CORS
app.get("/api/test-cors", (req, res) => {
  res.json({ message: "CORS is working!" });
});

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to Bluestock API 🚀");
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
