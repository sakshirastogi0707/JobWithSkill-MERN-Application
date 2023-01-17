const express = require("express");
const { Signup } = require("../controller/signup");
const router = new express();

router.post("/signup", async (req, res, next) => {
  const response = await Signup(req.body, res);
  res.send(response);
  next();
});

module.exports = router;
