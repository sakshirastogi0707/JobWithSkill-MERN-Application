const express = require("express");
const { createPost } = require("../controller/CreateBlog");
const { updateBlog, deleteBlog } = require("../controller/updateBlog");
const { GetBlogData, getBlogById } = require("../controller/getBlog");
const {likeBlogPosts, unLikeBlogPosts} = require('../controller/CreateBlog');
const router = new express();
//Create Blog--------------------------------------------
router.post("/CreateBlog", async (req, res, next) => {
  await createPost(req.body, res);
  next();
});

//Get All Blogs-------------------------------------------
router.get("/getAllPosts", async (req, res, next) => {
  await GetBlogData(req, res);
  next();
});

//Get BY ID Blogs----------------------------------------
router.get("/:id", async (req, res, next) => {
  await getBlogById(req, res);
  next();
});

//Update Blog----------------------------------------------
router.put("/update_blog/:id", async (req, res, next) => {
  await updateBlog(req, res);
  next();
});
// Delete Blog---------------------------------------------
router.delete("/:id", async (req, res, next) => {
  await deleteBlog(req, res);
  next();
});
// Like Blog Post------------------------------------------------
router.put("/like", async (req, res, next) => {
  await likeBlogPosts(req, res);
  console.log('hello.......')
  next();
});
// Unlike Blog Post------------------------------------------
router.put("/unlike", async (req, res, next) => {
  await unLikeBlogPosts(req, res);
  next();
});
module.exports = router;
