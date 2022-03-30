const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

const user = mongoose.model("user", UserSchema);

module.exports = user;