import postModel from "../models/PostsModel.js";

export const getAllPosts = async (req, res) => {
  const response = await postModel.find({ user: req.user._id });
  res.json(response);
};

export const addPosts = async (req, body) => {
  const { title, description } = req.body;
  if (title && description) {
    const addBlog = await postModel({
      title: title,
      description: description,
      user: req.user._id,
    });
    const response = await addBlog.save();
    res.json(response);
  }
};
