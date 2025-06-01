const express = require("express");
const router = express.Router();
const feedbackController = require("../controllers/feedbackController");

router.post("/", feedbackController.submitFeedback);
router.get("/:id", feedbackController.getFeedback);

module.exports = router;
