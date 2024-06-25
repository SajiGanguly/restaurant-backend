// User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    // _id: mongoose.Schema.Types.ObjectId,
    firebaseID: { type: String, required: true, unique: true },
    registerName: {
      type: String,
      required: true,
    },
    registerEmail: { type: String, required: true, unique: true },
  },
  {
    collection: "Users",
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;