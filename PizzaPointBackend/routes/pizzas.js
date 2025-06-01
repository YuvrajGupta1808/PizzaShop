const express = require("express");
const router = express.Router();
const pizzaController = require("../controllers/pizzaController");

router.post("/", pizzaController.createPizza);
router.put("/:id", pizzaController.updatePizza);
router.get("/:id", pizzaController.getPizza);
router.delete("/:id", pizzaController.deletePizza);

module.exports = router;
