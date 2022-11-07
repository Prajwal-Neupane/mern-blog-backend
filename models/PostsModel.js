import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      refer: "users",
    },
  },
  { timestamps: true }
);

const postModel = mongoose.model("posts", postSchema);

export default postModel;
