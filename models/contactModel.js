const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  userId: [{ type: mongoose.Types.ObjectId, ref: "user" }],
  name: String,
  email: String,
  description: String,
  category: Number,
});

const contact = mongoose.model("contact", ContactSchema);

module.exports = contact;