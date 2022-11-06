import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
});

const userModel = mongoose.model("users", userSchema);

export default userModel;
