const mongoose = require("mongoose");
const JobSchema = mongoose.Schema(
  {
    companyName: {
      type: String,
      require: true,
    },
    jobTitle: {
      type: String,
      require: true,
    },
    JobDesc: {
      type: String,
      require: true,
    },
    salary: {
      type: String,
      require: true,
    },
    jobLocation: {
      type: String,
      require: true,
    },
    companyDesc: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    exprience:{
        type: String,
        require: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
