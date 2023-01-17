const blog = require("../models/BlogModal");

// UPDATE BLOG FUNCTIONALITY------------------------------
const updateBlog = async (req, res) => {
  try {
    const Blog = req.body;
    if (Blog.username === req.body.username) {
      try {
        await blog.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json("Your post updated successfully!");
      } catch (err) {
        res.status(500).json({ Error: err });
      }
    } else {
      res.status(401).json("you can only update your post!");
    }
  } catch (err) {
    res.status(500).json({ Error: err });
  }
};
//DELETE BLOG FUNCTIONALITY-------------------------------
const deleteBlog = async (req, res) => {
  try {
    // const Blog = await blog.findById(req.params.id);
    // if (Blog.username === req.body.username) {
    try {
      await blog.findByIdAndDelete(req.params.id);
      res.status(200).json("Post has been deleted");
    } catch (err) {
      res.status(500).json({ Error: err });
    }
    // }//else {
    // res.status(401).json("you can only Delete your post!");
    // }
  } catch (err) {
    res.status(500).json({ Error: err });
  }
};
module.exports = { updateBlog, deleteBlog };
