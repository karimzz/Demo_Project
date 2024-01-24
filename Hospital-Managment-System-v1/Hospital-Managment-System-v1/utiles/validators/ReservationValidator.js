//IOMPORTING DEPENDENCIES
const { check } = require("express-validator");
const validatorMiddleware = require("../../middleWares/validatorMiddleware");
const customValidators = require("../customValidators/CustomValidators");

exports.viewRequestValidator = [
  check("id")
    .isInt()
    .withMessage("Invalid request id!")
    .custom(customValidators.isValidID),
  validatorMiddleware,
];

exports.createRequestValidator = [
  check("clinic")
    .notEmpty()
    .withMessage("clinic name required")
    .custom(customValidators.isArabic),
  check("date")
    .notEmpty()
    .withMessage("request date is required")
    .custom(customValidators.isValidDate),
  validatorMiddleware,
];
exports.updateRequestValidator = [
  check("clinic")
    .notEmpty()
    .withMessage("clinic name required")
    .custom(customValidators.isArabic),
  check("date")
    .notEmpty()
    .withMessage("request date is required")
    .custom(customValidators.isValidDate),
  validatorMiddleware,
];
exports.deleteRequestValidator = [
  check("id").isInt().withMessage("invalid student id !"),
  validatorMiddleware,
];
