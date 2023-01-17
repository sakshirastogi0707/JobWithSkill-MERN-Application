const express = require("express");
const { CategoryFun, getAllCategory } = require("../controller/category");
const router = new express();
// New Category ROUTE--------------------------------
router.post("/category", async (req, res, next) => {
  return await CategoryFun(req, res);
  next();
});

//GET ALL CATEGORY ROUTE-----------------------------
router.get("/", async (req, res, next) => {
  return await getAllCategory(req, res);
  next();
});
module.exports = router;
