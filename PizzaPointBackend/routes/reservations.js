const express = require("express");
const router = express.Router();
const reservationController = require("../controllers/reservationController");

router.post("/", reservationController.makeReservation);
router.put("/:id", reservationController.updateReservation);
router.delete("/:id", reservationController.cancelReservation);
router.get("/:id", reservationController.getReservation);

module.exports = router;
