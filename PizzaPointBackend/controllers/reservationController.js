const Reservation = require("../models/Reservation");

exports.makeReservation = async (req, res) => {
  try {
    const { userID, date, time, numberOfGuests } = req.body;
    const newReservation = new Reservation({
      userID,
      date,
      time,
      numberOfGuests,
    });
    await newReservation.save();
    res.status(201).json(newReservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateReservation = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedReservation = await Reservation.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedReservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.cancelReservation = async (req, res) => {
  try {
    const { id } = req.params;
    await Reservation.findByIdAndDelete(id);
    res.status(200).json({ message: "Reservation cancelled" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getReservation = async (req, res) => {
  try {
    const { id } = req.params;
    const reservation = await Reservation.findById(id);
    res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
