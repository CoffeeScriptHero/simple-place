require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3080;

const registrationRoutes = require("./routes/registration.routes");
const userRoutes = require("./routes/user.routes");
const postRoutes = require("./routes/post.routes");

const URI = process.env.MONGO_CONNECTION_URL;

mongoose
  .connect(URI)
  .then(() => console.log("Database was connected"))
  .catch((err) => console.error(err));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json());

app.use("/api/registration", registrationRoutes);
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on the PORT::${PORT}`);
});
