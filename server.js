const express = require("express");
const mongoose = require("mongoose");
const user = require("./models/userModel");
const contact = require("./routers/contact");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config({
    path: "./config.env",
  });
const app = express();
app.use(express.json());

const secret = "5aJif0OZjepB63NRwyNSkk0czzttHKjXNQbEImrW";

mongoose
	.connect(process.env.MONGO_URI,
		{
			useNewUrlParser: true,
		}
	)
	.then(() => console.log("Connected to MongoDB"));


app.get("/", (_req, res) => {
    res.send("CRM");
});

app.use("/contact", contact);

app.use("*", (err, req, res, next) => {
    res.send("error");
});

app.listen(8000, () => {
    console.log("Listening on port 8000");
});