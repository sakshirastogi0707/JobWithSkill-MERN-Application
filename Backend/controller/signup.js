const bcrypt = require("bcryptjs");
const user = require("../models/UserModal");

//SIGNUP CONTROLLER---------------------------------
const Signup = async (userDets, res) => {
  try {
    let usernameTaken = await validateUsername(userDets.username);
    let emailRegistred = await validateEmail(userDets.email);
    if (usernameTaken) {
      return res
        .send({
          meassage: "username is already taken",
          success: false,
        })
        .status(400);
    } else if (emailRegistred) {
      return res.status(400).json({
        meassage: "email is already taken",
        success: false,
      });
    } else {
      const hashedPassword = await bcrypt.hash(userDets.password, 12);
      userDets.password = hashedPassword;
      const NewUser = new user({
        ...userDets,
        hashedPassword,
      });
      const saved = await NewUser.save();
      console.log(saved);
      return res.status(201).json({
        data: saved,
        meassage: "Hurry, you are Signed up successfully",
        success: true,
      });
    }
  } catch (err) {
    return res
      .json({
        meassage: "Unable to create your account",
        success: false,
      })
      .status(500);
  }
};
const validateUsername = async (username) => {
  let User = await user.findOne({
    username: username,
  });
  return User ? true : false;
};

const validateEmail = async (email) => {
  let User = await user.findOne({
    email: email,
  });

  return User ? true : false;
};
module.exports = { Signup };
