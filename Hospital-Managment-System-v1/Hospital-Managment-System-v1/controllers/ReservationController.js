//IMPORTING DEPENDENCIES
const asyncHandler = require("express-async-handler");
const ApiError = require("../utiles/apiError");
const db = require("../config/db");

//@desc     submit medical request
//@route    POST  /api/v1/Reservations
//@access   public
exports.createRequest = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const { clinic, date } = req.body;
  const sql =
    "INSERT INTO reservations (user_id, clinic, date) VALUES (?, ?, ?)";
  db.query(sql, [userId, clinic, date], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log("request created successfully");
      res.status(201).json({ reservations: result });
    }
  });
});

//@desc     modify medical request
//@route    PUT  /api/v1/Reservations
//@access   public
exports.updateRequest = asyncHandler(async (req, res) => {
  const userId = req.params.userId;
  const reqId = req.params.id;
  const { clinic, date } = req.body;

  const sql =
    "UPDATE reservations SET clinic = ?, date = ? WHERE id = ? AND user_id = ?";
  db.query(sql, [clinic, date, reqId, userId], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send("request data updated successfully");
    }
  });
});

//@desc     view medical request
//@route    GET  /api/v1/Reservations
//@access   public
exports.viewRequest = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const sql = "SELECT * FROM reservations WHERE user_id = ?";
  db.query(sql, [userId], (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

//@desc     delete medical request
//@route    DELETE  /api/v1/Reservations
//@access   public
exports.deleteRequest = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const sql = "DELETE FROM reservations WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send("reservation deleted successfully");
    }
  });
});
