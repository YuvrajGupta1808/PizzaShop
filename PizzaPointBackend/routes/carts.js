const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

router.post("/", cartController.createCart);
router.put("/:id", cartController.updateCart);
router.get("/:id", cartController.getCart);
router.delete("/:id", cartController.deleteCart);

module.exports = router;
