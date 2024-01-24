// //IOMPORTING DEPENDENCIES
// const Joi = require("joi");

// exports.signUpValidator = async () => {
//   const signUpSchema = Joi.object({
//     name: Joi.string().min(2).max(20).required(),
//     email: Joi.string()
//       .required()
//       .email()
//       .email({ minDomainSegments: 2, tlds: { allow: ["eg"] } })
//       .custom((value, helpers) => {
//         if (!value.endsWith("helwan.edu.eg")) {
//           return helpers.message("Invalid email domain!");
//         }
//         return value;
//       }),
//     password: Joi.string()
//       .required()
//       .pattern(/^[A-Z][a-z0-9#@]{8,40}$/),
//     gender: Joi.string().valid("male", "female").required(),
//     rePassword: Joi.valid(Joi.ref("password")).required(),
//     age: Joi.number().min(18).max(100).required(),
//   });
//   //! Start Validation
//   const { error } = await signUpSchema.validate(req.body, {
//     abortEarly: false,
//   });
//   if (error) {
//     return res.status(400).json({
//       success: false,
//       error: error.details.map((err) => err.message),
//     });
//   }
//   //! End Validation
// };
