console.log("=== PIZZA SHOP BACKEND DEBUG ===");
console.log("Node.js version:", process.version);
console.log("Current working directory:", process.cwd());
console.log("Script arguments:", process.argv);

console.log("\n=== CHECKING DEPENDENCIES ===");
try {
  const express = require("express");
  console.log("✅ Express loaded successfully");
} catch (err) {
  console.log("❌ Express failed to load:", err.message);
}

try {
  const { MongoClient } = require("mongodb");
  console.log("✅ MongoDB driver loaded successfully");
} catch (err) {
  console.log("❌ MongoDB driver failed to load:", err.message);
}

console.log("\n=== CHECKING ENVIRONMENT ===");
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://Gupta:Yuvi1234@pizzapoint.kznvrdq.mongodb.net/?retryWrites=true&w=majority&appName=PizzaPoint";
const PORT = process.env.PORT || 5000;

console.log("MongoDB URI:", MONGO_URI);
console.log("Port:", PORT);

console.log("\n=== STARTING BASIC EXPRESS SERVER ===");
try {
  const express = require("express");
  const app = express();
  
  app.get("/", (req, res) => {
    res.json({ message: "Backend is working!", timestamp: new Date() });
  });
  
  const server = app.listen(PORT, () => {
    console.log(`🚀 Basic server started on port ${PORT}`);
    console.log(`🌐 Visit: http://localhost:${PORT}`);
  });
  
  server.on('error', (err) => {
    console.error("❌ Server error:", err);
  });
  
} catch (err) {
  console.error("❌ Failed to start server:", err);
}
