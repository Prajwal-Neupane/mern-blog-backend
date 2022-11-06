import mongoose from "mongoose";
import userModel from "../models/UserModel.js";

export const getAllUser = async (req, res) => {
  const response = await userModel.find();
  res.json(response);
};

export const postUser = async (req, res) => {
  const response = await userModel(req.body);
  const data = await response.save();
  res.json(data);
};
