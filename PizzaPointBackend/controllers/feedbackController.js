const Feedback = require("../models/Feedback");

exports.submitFeedback = async (req, res) => {
  try {
    const { userID, message } = req.body;
    const newFeedback = new Feedback({ userID, message });
    await newFeedback.save();
    res.status(201).json(newFeedback);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getFeedback = async (req, res) => {
  try {
    const { id } = req.params;
    const feedback = await Feedback.findById(id);
    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
