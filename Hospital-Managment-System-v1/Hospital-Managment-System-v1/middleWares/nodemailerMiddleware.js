// //IMPORTING DEPENDENCIES
// const asyncHandler = require("express-async-handler");
// const nodemailer = require("nodemailer");
// const pool = require("../config/db");
// const jwt = require("jsonwebtoken");

// exports.sendConfirmationEmail = asyncHandler(async (req, res) => {
//   //const activationToken = crypto.randomBytes(32).toString("hex");

//   const { name, age, gender, email, password } = req.body;
//   // Sign JWT token with user information and set expiration to 10 seconds
//   const token = jwt.sign({ email }, process.env.SECRETKEY || "abotrika", {
//     expiresIn: "30s",
//   });

//   await pool
//     .promise()
//     .execute(
//       "INSERT INTO users (email,password,age,name,gender) VALUES (?, ?, ?, ?, ?)",
//       [email, password, age, name, gender]
//     );

//   const recipientEmail = email;
//   const activationLink = `http://localhost:7000/activate?token=${token}`;
//   const emailBody = `<body style="background-color: #001f3f; color: #ffffff; font-family: 'Arial', sans-serif; margin: 0; padding: 0;">

//       <div style="width: 100%; max-width: 600px; margin: 0 auto; padding: 20px;">
//         <div style="text-align: center; padding: 20px 0;">
//         <h1 style="color: #fff">Welcom to Helwan Hospital</h1>
//         <h2>Hello ${req.body.name}!</h2>
//         </div>

//         <div style="padding: 20px 0;">
//           <p>Thank you for choosing Helwan Hospital. To complete your registration, please click the button below to verify your email address.</p>
//           <a href="${activationLink}" style="display: inline-block; padding: 15px 30px; text-decoration: none; background-color: #004080; color: #ffffff; border-radius: 15px; font-weight: bold;">Verify Email</a>
//         </div>

//         <div style="text-align: center; padding: 20px 0;">
//           <p style="color:red">The Link Expires After 30 seconds!</p>
//           <p>Along With U</p>
//         </div>
//       </div>
//     >`;
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "inkozeks@gmail.com",
//       pass: "tvwxgyrfnzfvrxia",
//     },
//   });

//   const info = await transporter.sendMail({
//     from: '"Farouk Khaled 👻" <inkozeks@gmail.com>',
//     to: recipientEmail,
//     subject: "Verification Code!",
//     html: emailBody,
//   });
//   console.log("Message sent: %s", info.messageId);
//   return res.status(200).json({
//     success: true,
//     message: "Account created successfully. Check your email for verification!",
//   });
// });
