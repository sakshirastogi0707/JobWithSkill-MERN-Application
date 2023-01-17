const express = require("express");
const { UserLogin } = require("../controller/login");
const router = new express();
//LOGIN ROUTE-------------------------------------------
router.post("/Login", async (req, res, next) => {
  const response = await UserLogin(req.body, res);
  res.send(response);
  next();
});

module.exports = router;
