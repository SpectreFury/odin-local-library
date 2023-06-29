require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const indexRouter = require("./routes/index");
const catalogRouter = require("./routes/catalog");

mongoose.connect(process.env.MONGODB_URI);

app.use('/', indexRouter);
app.use('/catalog', catalogRouter);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
