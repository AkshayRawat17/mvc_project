const mongoose = require("mongoose");

const ServiceSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name Field is Mandatory"],
  },
  icon: {
    type: String,
    required: [true, "Icon Field is Mandatory"],
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

const Service = new mongoose.model("Service", ServiceSchema);

module.exports = Service;
