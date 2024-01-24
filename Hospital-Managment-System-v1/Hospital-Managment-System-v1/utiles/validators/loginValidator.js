//IOMPORTING DEPENDENCIES
const { check } = require("express-validator");
const validatorMiddleware = require("../../middleWares/validatorMiddleware");

exports.loginValidator = [
  check("email")
    .notEmpty()
    .withMessage("email is required")
    .bail()
    .isEmail()
    .withMessage("invalid email"),
  check("password")
    .notEmpty()
    .withMessage("password is required")
    .bail()
    .isLength({ min: 8 }),
  validatorMiddleware,
];
