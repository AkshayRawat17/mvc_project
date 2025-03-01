const mongoose = require("mongoose");

const ContactUsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name Field is Mandatory"],
    },
    email: {
      type: String,
      required: [true, "Email Address Field is Mandatory"],
    },
    phone: {
      type: String,
      required: [true, "Phone Number Field is Mandatory"],
    },
    subject: {
      type: String,
      required: [true, "Subject Field is Mandatory"],
    },
    message: {
      type: String,
      required: [true, "Message Field is Mandatory"],
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const ContactUs = new mongoose.model("ContactUs", ContactUsSchema);

module.exports = ContactUs;
