const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();
const PORT = 5000;
const MONGO_URI = "mongodb+srv://Gupta:Yuvi1234@pizzapoint.kznvrdq.mongodb.net/?retryWrites=true&w=majority&appName=PizzaPoint";

// Basic middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Pizza Shop Backend is running!", status: "OK" });
});

app.get("/test", (req, res) => {
  res.json({ message: "Test endpoint working!" });
});

console.log("Starting simplified backend server...");
console.log("MongoDB URI:", MONGO_URI);

const client = new MongoClient(MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function startServer() {
  try {
    console.log("Connecting to MongoDB Atlas...");
    await client.connect();
    
    console.log("Testing MongoDB connection...");
    await client.db("admin").command({ ping: 1 });
    console.log("✅ MongoDB Atlas connection successful!");

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
      console.log(`🍕 Pizza Shop Backend is ready!`);
    });

  } catch (err) {
    console.error("❌ Error starting server:", err);
    process.exit(1);
  }
}

startServer();
