const mongoose = require("mongoose");
const catSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("category", catSchema);
