import express from "express";
import { addPosts, getAllPosts } from "../controllers/PostController.js";
import checkIsUserAuthenticated from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", checkIsUserAuthenticated, getAllPosts);
router.post("/add", checkIsUserAuthenticated, addPosts);

export default router;
