const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  userID: { type: Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  numberOfGuests: { type: Number, required: true },
});

module.exports = mongoose.model("Reservation", reservationSchema);
