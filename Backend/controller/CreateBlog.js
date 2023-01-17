const blog = require("../models/BlogModal");
const user = require("../models/UserModal");
//CREATE POST-----------------------------------------
const createPost = async (blogDetails, res) => {
  try {
    const Data = await blog.findOne({ title: blogDetails.title });
    if (Data != null) {
      return res.json({ msg: " this data is alrady exist.." });
    } else {
      const newPost = new blog({ ...blogDetails });
      const savedPost = await newPost.save();
      res.status(200).json({
        data: savedPost,
        msg: "Your post uploded successfully!",
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
// like post
const likeBlogPosts = async (req, res) => {
  try {
    const Data = await user.findOne({ username: req.body.username });

    blog
      .findByIdAndUpdate(
        req.body.postId,
        {
          $push: { likes: req },
        },
        { new: true }
      )
      .exec((err, result) => {
        if (err) {
          res.status(422).json({ error: err });
        } else {
          res.status(200).json(result);
        }
      });
  } catch (err) {
    console.log(err);
  }
};

//dislike post-----
const unLikeBlogPosts = async (req, res) => {
  try {
    blog
      .findByIdAndUpdate(
        req.body.postId,
        {
          $pull: { likes: req.user._id },
        },
        { new: true }
      )
      .exec((err, result) => {
        if (err) {
          res.status(422).json({ error: err });
        } else {
          res.status(200).json(result);
        }
      });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { likeBlogPosts, unLikeBlogPosts, createPost };
