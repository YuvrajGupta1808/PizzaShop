const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  userID: { type: Schema.Types.ObjectId, ref: "User", required: true },
  pizzaList: [{ type: Schema.Types.ObjectId, ref: "Pizza", required: true }],
  totalPrice: { type: Number, required: true },
});

module.exports = mongoose.model("Cart", cartSchema);
