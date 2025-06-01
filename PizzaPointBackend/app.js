const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Routes
const userRoutes = require("./routes/users");
const pizzaRoutes = require("./routes/pizzas");
const orderRoutes = require("./routes/orders");
const reservationRoutes = require("./routes/reservations");
const feedbackRoutes = require("./routes/feedbacks");
const cartRoutes = require("./routes/carts");

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/users", userRoutes);
app.use("/pizzas", pizzaRoutes);
app.use("/orders", orderRoutes);
app.use("/reservations", reservationRoutes);
app.use("/feedbacks", feedbackRoutes);
app.use("/carts", cartRoutes);

module.exports = app;
