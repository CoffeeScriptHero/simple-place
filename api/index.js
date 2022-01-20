require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3080;

const signUpRoutes = require("./routes/signup.routes");

const URI = process.env.MONGO_CONNECTION_URL;

mongoose
  .connect(URI)
  .then(() => console.log("Database was connected"))
  .catch((err) => console.error(err));

app.use(bodyParser.json());

app.use("/", signUpRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on the PORT::${PORT}`);
});
