const category = require("../models/Categorymodal");
// Create Category---------------------------------
const CategoryFun = async (req, res) => {
  const newCat = new category(req.body);
  try {
    const Data = await category.findOne({ name: req.body.name });
    if (Data != null) {
      return res.json({ msg: " this data is alrady exist.." });
    } else {
      const savedCat = await newCat.save();
      res.status(200).json(savedCat);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// get all categories------------------------------
const getAllCategory = async (req, res) => {
  const cats = await category.find();
  try {
    res.status(200).json(cats);
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports = { CategoryFun, getAllCategory };
