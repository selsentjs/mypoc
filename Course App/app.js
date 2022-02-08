require("dotenv").config();
const express = require("express");
const fs = require("fs");
const courseRoutes = require("./routes/courseRoutes");
const courseDetailsRoutes = require("./routes/courseDetailsRoutes");
const uploadVideo = require("./routes/handleFilesRoute");
require("./database/connection");

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/course", courseRoutes);
app.use("/api/courseDetails", courseDetailsRoutes);

app.use("/api/upload", uploadVideo);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home page");
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
