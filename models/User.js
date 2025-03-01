const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Full Name Field is Mandatory"],
    },
    username: {
      type: String,
      required: [true, "Username Field is Mandatory"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email Address Field is Mandatory"],
      unique: true,
    },
    phone: {
      type: String,
      required: [true, "Phone Number Field is Mandatory"],
    },
    password: {
      type: String,
      required: [true, "Password Field is Mandatory"],
    },
    otp: {
      type: Number,
      default: 9878367,
    },
    role: {
      type: String,
      default: "Admin",
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);
const User = new mongoose.model("User", UserSchema);

module.exports = User;
