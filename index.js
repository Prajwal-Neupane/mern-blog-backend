import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import userRoute from "./routes/UserRoutes.js";

const app = express();

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 3001;

// const DB = "mongodb://0.0.0.0:27017";
const DB =
  "mongodb+srv://prajwal:prajwal321@cluster0.dcgm2a5.mongodb.net/blog-mern?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose
    .connect(DB)
    .then(() => console.log("Connected"))
    .catch((err) => console.log(err));
};
connectDB();
app.use("/user", userRoute);

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
