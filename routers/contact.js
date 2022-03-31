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

function Connected() {
  let data;
  try {
    data = jwt.verify(req.cookies.jwt, secret);
  } catch (err) {
    return res.status(401).json({
      message: "token not valid",
    });
  }

  res.json({
    message: "request accepted",
    data,
  });
}

router.get("/", Connected, async (req, res) => {});

module.exports = router;