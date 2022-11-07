import jwt from "jsonwebtoken";
import userModel from "../models/UserModel.js";

const checkIsUserAuthenticated = async (req, res, next) => {
  let token;
  const { authorization } = req.headers;
  if (authorization && authorization.startsWith("Bearer")) {
    token = authorization.split(" ")[1];
    // Verify token
    const { userID } = jwt.verify(token, "MERN");

    // get user from token

    req.user = await userModel.findById(userID).select("--password");
    next();
  } else {
    res.json("User not authorized");
  }
};

export default checkIsUserAuthenticated;
