const express = require("express");
const app = express();
const mysql = require("mysql2/promise");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const Joi = require("joi");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const pool = require("../config/db");

app.use(express.json());

const signUpSchema = Joi.object({
  name: Joi.string().min(2).max(20).required(),
  email: Joi.string()
    .required()
    .email()
    .email({ minDomainSegments: 2, tlds: { allow: ["eg"] } })
    .custom((value, helpers) => {
      if (!value.endsWith("helwan.edu.eg")) {
        return helpers.message("Invalid email domain!");
      }
      return value;
    }),
  password: Joi.string()
    .required()
    .pattern(/^[A-Z][a-z0-9#@]{8,40}$/),
  gender: Joi.string().valid("male", "female").required(),
  rePassword: Joi.valid(Joi.ref("password")).required(),
  age: Joi.number().min(18).max(100).required(),
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "inkozeks@gmail.com",
    pass: "tvwxgyrfnzfvrxia",
  },
});

exports.signUp = asyncHandler(async (req, res) => {
  try {
    //! Start Validation
    const { error } = await signUpSchema.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      return res.status(400).json({
        success: false,
        error: error.details.map((err) => err.message),
      });
    }
    //! End Validation
    const { name, age, gender, email, password } = req.body;

    const [emailExist] = await pool
      .promise()
      .execute("SELECT * FROM users WHERE email = ?", [email]);

    if (emailExist.length > 0) {
      return res
        .status(409)
        .json({ success: false, error: "Email already exists" });
    }
    req.body.password = bcrypt.hashSync(req.body.password, 8);

    const activationToken = crypto.randomBytes(32).toString("hex");

    // Sign JWT token with user information and set expiration to 10 seconds
    const token = jwt.sign(
      { email },
      process.env.JWT_SECRET || "your-secret-key",
      {
        expiresIn: "30s",
      }
    );

    await pool
      //.promise()
      .execute(
        "INSERT INTO users (email,password,age,name,gender) VALUES (?, ?, ?, ?, ?)",
        [email, req.body.password, age, name, gender]
      );

    const recipientEmail = email;
    const activationLink = `http://localhost:7000/api/v1/activate?token=${token}`;
    const emailBody = `<body style="background-color: #001f3f; color: #ffffff; font-family: 'Arial', sans-serif; margin: 0; padding: 0;">
  
          <div style="width: 100%; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="text-align: center; padding: 20px 0;">
            <h1 style="color: #fff">Welcom to Helwan Hospital</h1>
            <h2>Hello ${req.body.name}!</h2>
            </div>
        
            <div style="padding: 20px 0;">
              <p>Thank you for choosing Helwan Hospital. To complete your registration, please click the button below to verify your email address.</p>
              <a href="${activationLink}" style="display: inline-block; padding: 15px 30px; text-decoration: none; background-color: #004080; color: #ffffff; border-radius: 15px; font-weight: bold;">Verify Email</a>
            </div>
        
            <div style="text-align: center; padding: 20px 0;">
              <p style="color:red">The Link Expires After 30 seconds!</p>
              <p>Along With U</p>
            </div>
          </div>
        >`;

    const info = await transporter.sendMail({
      from: '"Farouk Khaled 👻" <inkozeks@gmail.com>',
      to: recipientEmail,
      subject: "Verification Code!",
      html: emailBody,
    });

    console.log("Message sent: %s", info.messageId);

    return res.status(200).json({
      success: true,
      message:
        "Account created successfully. Check your email for verification!",
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

exports.activate = async (req, res) => {
  try {
    const { token } = req.query;

    // Verify JWT token
    jwt.verify(
      token,
      process.env.JWT_SECRET || "your-secret-key",
      async (err, decoded) => {
        if (err) {
          return res
            .status(400)
            .json({ success: false, error: "Invalid JWT token." });
        }

        // Update the user's activation status and remove the activation token
        await pool.execute(
          "UPDATE users SET verifyEmail = 1, activation_token = NULL WHERE email = ?",
          [decoded.email]
        );

        return res.status(200).json({
          success: true,
          message: "Account activated successfully!",
        });
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(500)
      .json({ success: false, error: "Internal Server Error" });
  }
};
