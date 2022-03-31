const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const app = express();
const contact = require("../models/contactModel");
const user = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const secret = "5aJif0OZjepB63NRwyNSkk0czzttHKjXNQbEImrW";

router.post("/", async (req, res) => {
    const { email, password } = req.body;
  
    const users = await user.findOne({ email });

    if (!users) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }
});


module.exports = router;