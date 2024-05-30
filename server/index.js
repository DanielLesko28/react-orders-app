const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const port = 4000;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
