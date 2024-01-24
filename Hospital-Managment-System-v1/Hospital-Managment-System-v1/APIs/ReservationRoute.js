const express = require("express");

const {
  createRequest,
  updateRequest,
  viewRequest,
  deleteRequest,
} = require("../controllers/ReservationController");

//IMPORT VALIDATORS
const {
  createRequestValidator,
  updateRequestValidator,
  viewRequestValidator,
  deleteRequestValidator,
} = require("../utiles/validators/ReservationValidator");

const router = express.Router();

router.route("/:id").post(createRequestValidator, createRequest);

router
  .route("/:userId/:id")
  .put(updateRequestValidator, updateRequest)
  .get(viewRequestValidator, viewRequest)
  .delete(deleteRequestValidator, deleteRequest);

module.exports = router;
