const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name Field is Mandatory"],
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
  },
  { timestamps: true }
);

const Blog = new mongoose.model("Blog", BlogSchema);

module.exports = Blog;
