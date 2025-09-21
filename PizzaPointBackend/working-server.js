const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");

// Configuration
const PORT = 5000;
const MONGO_URI = "mongodb+srv://Gupta:Yuvi1234@pizzapoint.kznvrdq.mongodb.net/?retryWrites=true&w=majority&appName=PizzaPoint";

console.log("🍕 Starting Pizza Shop Backend...");

// Create Express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS middleware (for frontend to connect)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Basic routes
app.get("/", (req, res) => {
  res.json({ 
    message: "Pizza Shop Backend API", 
    status: "Running",
    timestamp: new Date(),
    endpoints: ["/users", "/pizzas", "/orders", "/carts", "/reservations", "/feedbacks"]
  });
});

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Server is healthy" });
});

// Basic user routes (simplified)
app.post("/users/signup", (req, res) => {
  console.log("Signup request:", req.body);
  res.json({ message: "Signup successful", user: { id: 1, username: req.body.username } });
});

app.post("/users/login", (req, res) => {
  console.log("Login request:", req.body);
  res.json({ message: "Login successful", token: "mock-token-123", user: { id: 1, username: req.body.username } });
});

// Basic pizza routes
app.get("/pizzas", (req, res) => {
  res.json({ message: "Pizza list", pizzas: [] });
});

app.post("/pizzas/create", (req, res) => {
  console.log("Create pizza:", req.body);
  res.json({ message: "Pizza created", pizzaId: Date.now() });
});

// Basic cart routes
app.post("/cart/add", (req, res) => {
  console.log("Add to cart:", req.body);
  res.json({ message: "Added to cart successfully" });
});

app.get("/allpizzas", (req, res) => {
  res.json([
    { id: 1, name: "Margherita", price: 12.99, quantity: 1 },
    { id: 2, name: "Pepperoni", price: 14.99, quantity: 1 }
  ]);
});

// MongoDB connection
const client = new MongoClient(MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function startServer() {
  try {
    console.log("📡 Connecting to MongoDB Atlas...");
    await client.connect();
    
    console.log("🔍 Testing database connection...");
    await client.db("admin").command({ ping: 1 });
    console.log("✅ MongoDB Atlas connected successfully!");

    // Start the server
    const server = app.listen(PORT, () => {
      console.log(`🚀 Pizza Shop Backend is running!`);
      console.log(`🌐 Server URL: http://localhost:${PORT}`);
      console.log(`📱 Frontend can connect from: http://localhost:3000`);
      console.log(`📊 API Status: http://localhost:${PORT}/health`);
    });

    server.on('error', (err) => {
      console.error("❌ Server error:", err);
    });

    // Graceful shutdown
    process.on('SIGTERM', async () => {
      console.log('🛑 Shutting down gracefully...');
      await client.close();
      server.close();
    });

  } catch (err) {
    console.error("❌ Failed to start server:", err);
    process.exit(1);
  }
}

startServer();
