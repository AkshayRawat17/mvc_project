const mongoose = require("mongoose");

const TestimonialSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name Field is Mandatory"],
  },
  profession: {
    type: String,
    required: [true, "Profession Field is Mandatory"],
  },
  message: {
    type: String,
    required: [true, "Message Field is Mandatory"],
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

const Testimonial = new mongoose.model("Testimonial", TestimonialSchema);

module.exports = Testimonial;
