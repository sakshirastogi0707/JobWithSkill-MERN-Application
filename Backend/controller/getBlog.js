const blog = require("../models/BlogModal");
// GET-BLOG-DATA CONTROLLER-----------------------------
const GetBlogData = async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let blogs;
    if (username) {
      blogs = await blog.find({ username });
    } else if (catName) {
      blogs = await blog.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      blogs = await blog.find();
    }
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET SINGLE BLOG BY ID----------------------------------
const getBlogById = async (req, res) => {
  try {
    const Blog = await blog.findById(req.params.id);
    res.status(200).json(Blog);
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports = { GetBlogData, getBlogById };
