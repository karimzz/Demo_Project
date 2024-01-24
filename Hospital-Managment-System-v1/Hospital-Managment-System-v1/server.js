//IMPORTING DEPENDENCIES
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config({ path: "config.env" });
const ApiError = require("./utiles/apiError");

const ReservationRoute = require("./APIs/ReservationRoute");
const loginRoute = require("./APIs/loginRoute");
const signUpRoute = require("./APIs/signUpRoute");
const globalError = require("./middlewares/errorMiddleware");

//DATABASE CONNECTION
const dbConnection = require("./config/db");

dbConnection.getConnection((err) => {
  if (err) {
    console.error("Unable to connect to MySQL:", err);
    return;
  } else {
    console.log("hospitalDummy db connected !");
  }
});

//MIDDLEWARE FOR PARSING JSON REQUESTS
app.use(express.json());
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`mode: ${process.env.NODE_ENV}`);
}

//MOUNT ROUTES
app.use("/api/v1/reservations/", ReservationRoute);
app.use("/api/v1/", loginRoute);
app.use("/api/v1/", signUpRoute);



app.all("*", (req, res, next) => {
  next(new ApiError(`Can't find this route: ${req.originalUrl}`, 400));
});

//GLOBAL ERROR HANDLING MIDDLEWARE
app.use(globalError);

// Start the server and store the result in a variable
const server = app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});

//HANDLING REJECTIONS OUTSIDE EXPRESS
process.on("unhandledRejection", (err) => {
  console.log(`unhandled error: ${err.name} | ${err.message}`);
  server.close(() => {
    console.log("shutting down....");
    process.exit(1);
  });
});
