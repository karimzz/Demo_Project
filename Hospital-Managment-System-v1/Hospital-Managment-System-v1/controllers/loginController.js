//IMPORTING DEPENDENCIES
const asyncHandler = require("express-async-handler");
const ApiError = require("../utiles/apiError");
const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // Query the database to find the user by email
    const [results] = await db
      .promise()
      .query("SELECT * FROM users WHERE email = ?", [email]);

    if (results.length === 0) {
      // User not found
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const user = results[0];

    // Compare the provided password with the hashed password from the database
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      // Passwords do not match
      return res.status(401).json({ error: "Incorrect Password" });
    }

    // Passwords match, generate a JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.SECRETKEY, // Replace with your secret key
      { expiresIn: "1h" } // Token expires in 1 hour, adjust as needed
    );

    res.status(200).json({ message: "login successfully", token });
  } catch (error) {
    // Pass the error to the next middleware for centralized error handling
    next(error);
  }
});
