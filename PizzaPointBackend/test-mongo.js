const { MongoClient, ServerApiVersion } = require("mongodb");

const MONGO_URI = "mongodb+srv://Gupta:Yuvi1234@pizzapoint.kznvrdq.mongodb.net/?retryWrites=true&w=majority&appName=PizzaPoint";

console.log("Testing MongoDB Atlas connection...");
console.log("URI:", MONGO_URI);

const client = new MongoClient(MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function testConnection() {
  try {
    console.log("Attempting to connect to MongoDB Atlas...");
    await client.connect();
    
    console.log("Connected! Testing ping...");
    await client.db("admin").command({ ping: 1 });
    
    console.log("✅ SUCCESS: MongoDB Atlas connection is working!");
    console.log("Database connection established successfully.");
    
  } catch (err) {
    console.error("❌ ERROR: Failed to connect to MongoDB Atlas:");
    console.error(err);
  } finally {
    await client.close();
    console.log("Connection closed.");
  }
}

testConnection();
