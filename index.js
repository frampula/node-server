const express = require("express");
const { validateUser } = require('./middlewares/index')
const app = express();

const bodyParser = express.json();

const PORT = 5000;

app.post("/user", bodyParser, validateUser);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
