const user = require("../models/UserModal");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET } = require("../Config/keys");
// LOGIN CONTROLLER--------------------------------------
const UserLogin = async (userDetails, res) => {
  let { username, password, email } = userDetails;
  //checking user details
  let User = await user.findOne({ username: username });
  if (!User) {
    return res.status(403).json({
      meassage: "User not found",
      success: false,
    });
  }
  //cheking email
  let UserEmail = await user.findOne({ email: email });
  if (!UserEmail) {
    return res.status(403).json({
      meassage: "Email not found",
      success: false,
    });
  }

  //ckecking password

  let ismatch = await bcrypt.compare(password, User.password);

  if (ismatch) {
    let token = jwt.sign(
      {
        _id: User._id,
        username: User.username,
        email: User.email,
      },
      SECRET,
      { expiresIn: "7 days" }
    );
    let result = {
      _id: User._id,
      username: User.username,
      email: User.email,
      token: `Bearer ${token}`,
      expiresIn: 168,
    };
    return res.status(200).json({
      ...result,
      meassage: "Congratulation!,You Logged in",
      success: true,
    });
  } else {
    return res.status(403).json({
      meassage: "incorrect password",
      success: false,
    });
  }
};

module.exports = { UserLogin };
