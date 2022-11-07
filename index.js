import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import userRoute from "./routes/UserRoutes.js";
import postRoute from "./routes/PostRoutes.js";

const app = express();

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 3001;

// const DB = "mongodb://0.0.0.0:27017";

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Connected"))
    .catch((err) => console.log(err));
};
connectDB();
app.use("/user", userRoute);
app.use("/post", postRoute);

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
