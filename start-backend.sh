#!/bin/bash

echo "🍕 Starting Pizza Shop Backend Server..."
echo "========================================"

cd /Users/Yuvraj/Desktop/TutreeProjects/PizzaShop/PizzaPointBackend

echo "📁 Current directory: $(pwd)"
echo "🔧 Node version: $(node --version)"
echo "📦 NPM version: $(npm --version)"

echo ""
echo "🌐 MongoDB URI: mongodb+srv://Gupta:Yuvi1234@pizzapoint.kznvrdq.mongodb.net/?retryWrites=true&w=majority&appName=PizzaPoint"
echo "🚪 Port: 5000"
echo ""

echo "🚀 Starting server..."
export MONGO_URI="mongodb+srv://Gupta:Yuvi1234@pizzapoint.kznvrdq.mongodb.net/?retryWrites=true&w=majority&appName=PizzaPoint"
export PORT=5000

node server.js
