const mongoose = require("mongoose");

const TeamSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name Field is Mandatory"],
  },
  profile: {
    type: String,
    required: [true, "Profile Field is Mandatory"],
  },
  facebook: {
    type: String,
    default: "",
  },
  linkedin: {
    type: String,
    default: "",
  },
  twitter: {
    type: String,
    default: "",
  },
  instagram: {
    type: String,
    default: "",
  },
  pic: {
    type: String,
    required: [true, "Pic Field is Mandatory"],
  },
  sortOrder: {
    type: Number,
    default: 10,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

const Team = new mongoose.model("Team", TeamSchema);

module.exports = Team;
