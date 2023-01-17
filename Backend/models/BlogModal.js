const mongoose = require("mongoose");
const blogSchema = mongoose.Schema(
  {
    username:{
      type: String,
      require: true
    },
    title: {
      type: String,
      require: true,
      unique: true
      
    },
    description: {
      type: String,
      require: true,
    },
    photo: {
      type: String,
      require: false,
    },
    categories: {
      type: Array,
      required: false,
    },
    likes:{
      type: Array,
      required: false,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("blog", blogSchema);
