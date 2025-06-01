const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.post("/", orderController.placeOrder);
router.put("/:id", orderController.updateOrder);
router.delete("/:id", orderController.cancelOrder);
router.get("/:id", orderController.getOrder);

module.exports = router;
