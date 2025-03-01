const mongoose = require("mongoose");

const NewsletterSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email Address Field is Mandatory"],
      unique: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Newsletter = new mongoose.model("Newsletter", NewsletterSchema);

module.exports = Newsletter;
