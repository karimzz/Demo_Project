const express = require("express");
const { signUp, activate } = require("../controllers/signUpController");

const router = express.Router();
router.route("/signUp").post(signUp);
router.get("/activate", activate);

module.exports = router;
