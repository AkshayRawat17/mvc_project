const mongoose = require("mongoose");

const ProgramSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name Field is Mandatory"],
  },
  fee: {
    type: Number,
    required: [true, "Program Fees Field is Mandatory"],
  },
  shortDescription: {
    type: String,
    required: [true, "Short Description Field is Mandatory"],
  },
  longDescription: {
    type: String,
    required: [true, "Long Description Field is Mandatory"],
  },
  cover: {
    type: String,
    required: [true, "Cover Pic Field is Mandatory"],
  },
  sortOrder: {
    type: Number,
    default: 10,
  },
  seats: {
    type: Number,
    default: 50,
  },
  duration: {
    type: Number,
    default: 60,
  },
  metaTitle: {
    type: String,
    default: "",
  },
  metaDescription: {
    type: String,
    default: "",
  },
  metaKeywords: {
    type: String,
    default: "",
  },
  active: {
    type: Boolean,
    default: true,
  },
});

const Program = new mongoose.model("Program", ProgramSchema);

module.exports = Program;
