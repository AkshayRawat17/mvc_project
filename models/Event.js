const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name Field is Mandatory"],
  },
  date: {
    type: String,
    required: [true, "Event Date Field is Mandatory"],
  },
  time: {
    type: String,
    required: [true, "Event Time Field is Mandatory"],
  },
  location: {
    type: String,
    required: [true, "Event Location Field is Mandatory"],
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

const Event = new mongoose.model("Event", EventSchema);

module.exports = Event;
