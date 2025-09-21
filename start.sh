#!/bin/bash

echo "🍕 Starting Pizza Shop Application..."

# Kill any existing processes on ports 3000 and 5000
echo "Stopping any existing services..."
lsof -ti:3000 | xargs kill -9 2>/dev/null || true
lsof -ti:5000 | xargs kill -9 2>/dev/null || true

# Start MongoDB if not running
echo "Checking MongoDB status..."
if ! brew services list | grep mongodb-community | grep started > /dev/null; then
    echo "Starting MongoDB..."
    brew services start mongodb/brew/mongodb-community
fi

# Start Backend (Port 5000)
echo "Starting Backend Server on port 5000..."
cd PizzaPointBackend
MONGO_URI=mongodb://localhost:27017/pizzashop PORT=5000 npm start &
BACKEND_PID=$!
echo "Backend started with PID: $BACKEND_PID"

# Wait a moment for backend to start
sleep 3

# Start Frontend (Port 3000)
echo "Starting Frontend Server on port 3000..."
cd ../PizzaShopFrontend
npm run dev &
FRONTEND_PID=$!
echo "Frontend started with PID: $FRONTEND_PID"

echo ""
echo "🎉 Pizza Shop Application is now running!"
echo "📱 Frontend: http://localhost:3000"
echo "🔧 Backend API: http://localhost:5000"
echo ""
echo "Press Ctrl+C to stop all services"

# Wait for user to stop
trap 'kill $BACKEND_PID $FRONTEND_PID 2>/dev/null; exit' INT
wait
