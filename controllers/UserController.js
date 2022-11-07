import mongoose from "mongoose";
import userModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Register User
export const registerUser = async (req, res) => {
  const { name, email, password, phone, bio, photo } = req.body;
  const userEmail = await userModel.findOne({ email: email });
  if (userEmail) {
    await res.json("Email is already taken");
    return;
  }
  if (!name || !email || !password) {
    res.json("Please fill all the required details");
  } else if (password.length < 8) {
    res.json("Password must be greater than 8");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await userModel({
    name,
    email,
    password: hashedPassword,
    phone,
    bio,
    photo,
  });
  const response = await newUser.save();

  res.json(response);
};

//  Login User

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email: email });
  if (user) {
    const validity = await bcrypt.compare(password, user.password);
    if (!validity) {
      res.json("Incorrect password");
    } else {
      const token = jwt.sign(
        {
          email: user.email,
          id: user._id,
        },
        "MERN",
        { expiresIn: "2h" }
      );
      res.json({ user, token });
    }
  } else {
    res.json("User not registered");
  }
};
