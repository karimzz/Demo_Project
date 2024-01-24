const express = require("express");

const { login } = require("../controllers/loginController");

//IMPORT VALIDATORS
const { loginValidator } = require("../utiles/validators/loginValidator");

const router = express.Router();

router.route("/login").post(loginValidator, login);

module.exports = router;
