const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const auth = require("../middleware/auth");

router.post("/signup", userController.register);
router.post("/login", userController.login);
router.put("/updateProfile", auth, userController.updateProfile);

module.exports = router;
