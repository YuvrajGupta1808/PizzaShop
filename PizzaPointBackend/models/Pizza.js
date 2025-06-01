const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pizzaSchema = new Schema({
  name: { type: String, required: true },
  doughType: { type: String, required: true },
  sauceType: { type: String, required: true },
  cheeseType: { type: String, required: true },
  toppings: { type: [String], required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Pizza", pizzaSchema);
