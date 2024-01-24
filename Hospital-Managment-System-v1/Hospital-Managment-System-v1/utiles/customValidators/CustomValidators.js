//IOMPORTING DEPENDENCIES
const db = require("../../config/db");
const ApiError = require("../apiError");
// to check if the code is in arabic or not
exports.isArabic = (value) => {
  if (!/^[؀-ۿـ\s]+$/u.test(value)) {
    throw new Error("provide clinic name in arabic");
  }
  return true;
};

//to validate appointment date
exports.isValidDate = (value) => {
  // Parse the input value as a date
  const appointmentDate = new Date(value);

  // Check if the date is valid
  if (Number.isNaN(appointmentDate)) {
    throw new Error("invalid date information");
  }

  // Get the current date
  const currentDate = new Date();

  // Check if the appointment date is in the future
  if (appointmentDate <= currentDate) {
    throw new Error("invalid date information");
  }
  return true;
};
