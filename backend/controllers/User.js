const User = require("../models/User");
const { createSecretToken } = require("../utils/SecretToken");

module.exports.signup = async (req, res, next) => {
  try {
    const { email, username, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists!" });
    }
    const newUser = await User.create({ email, username, password });
    const token = createSecretToken(newUser._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, newUser });

    next();
  } catch (e) {
    console.error(e);
  }
};
