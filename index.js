const express = require("express");
const yup = require("yup");
const app = express();

const bodyParser = express.json();

const validationSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required(),
  isSubscribed: yup.boolean().required(),
});

const PORT = 5000;

app.post("/user", bodyParser, async (req, res, next) => {
  try {
    const value = await validationSchema.validate(req.body);
  console.log(value);
  } catch (error) {
    res.status(400).send(error)
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
