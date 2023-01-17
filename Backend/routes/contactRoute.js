const express = require("express");
const router = express();
const { contactus } = require("../controller/contact");
router.post("/contact", async (req, res, next) => {
  await contactus(req, res);
  next();
});
module.exports = router
