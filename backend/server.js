const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const company = require("./routes/user");

//enviorment variables in .env file
require("dotenv").config();

//create express server
const app = express();
const port = process.env.PORT || 8000;

//middleware allow us to parse json
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI
  ? process.env.ATLAS_URI
  : "mongodb+srv://jojo:jojo@cluster0.jmvav.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDb database connection established succesfully");
});

app.use("/api/", company);

//start listening on a certain port
app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
