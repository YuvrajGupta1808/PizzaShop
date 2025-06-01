const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  userID: { type: Schema.Types.ObjectId, ref: "User", required: true },
  pizzaID: { type: Schema.Types.ObjectId, ref: "Pizza", required: true },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  orderStatus: { type: String, required: true },
});

module.exports = mongoose.model("Order", orderSchema);
