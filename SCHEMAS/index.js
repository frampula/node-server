const yup = require("yup");

module.exports.creatingSchema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required(),
    isSubscribed: yup.boolean().required(),
  });