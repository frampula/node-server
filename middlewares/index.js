const { creatingSchema } = require("../SCHEMAS/index");

module.exports.validateUser = async (req, res, next) => {
  try {
    await creatingSchema.validate(req.body);

    next();
  } catch (error) {
    res.status(400).send(error);
  }
};
