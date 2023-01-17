const user = require("../models/UserModal");

//UPDATE USER ACCOUNT-------------------------------
const updateUserAccount = async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const updatedUser = await user.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You can update only your account!");
  }
};
//DELETE USER ACCOUNT-----------------------------
const deleteUserAccount = async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      await user.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted...");
    } catch (err) {
      res.status(404).json({msg: "user not found!"});
    }
  } else {
    res.status(401).json("You can delete only your account!");
  }
};
module.exports = { updateUserAccount, deleteUserAccount };
