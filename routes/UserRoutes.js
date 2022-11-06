import express from "express";
import { getAllUser, postUser } from "../controllers/UserController.js";

const router = express.Router();

router.get("/", getAllUser);
router.post("/add", postUser);

export default router;
