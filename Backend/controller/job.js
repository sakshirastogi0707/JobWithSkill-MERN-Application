const job = require("../models/JobModal");
const postNewJob = async (req, res) => {
  try {
    const newJob = new job(req.body);
    const savedJob = await newJob.save();
    res.status(200).json({
      data: savedJob,
      msg: "Created successfully!",
    });
  } catch (err) {
      console.log(err)
  }
};

module.exports = { postNewJob };
