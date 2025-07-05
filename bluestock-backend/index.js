const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const app = express();
const port = 5050; 

// Middleware
const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes
const companyRoutes = require("./routes/companyRoutes");
const ipoRoutes = require("./routes/ipoRoutes");
const documentRoutes = require("./routes/documentRoutes");

// Mount routes
app.use("/api/companies", companyRoutes);
app.use("/api/ipo", ipoRoutes);
app.use("/api/documents", documentRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to Bluestock API 🚀");
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
