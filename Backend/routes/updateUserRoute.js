const express = require("express");
const {
  updateUserAccount,
  deleteUserAccount,
} = require("../controller/updateUser");
const router = new express();
//UPDATE USER-----------------------------------------
router.put("/update_user/:id", async (req, res, next) => {
  await updateUserAccount(req, res);
  next();
});

//DELETE USER-----------------------------------------
router.delete("/delete_user/:id", async (req, res, next) => {
  const response = await deleteUserAccount(req, res);
  res.send(response);
  next();
});

module.exports = router;
