import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import commentRoutes from "./routes/comments.js";
import videoRoutes from "./routes/videos.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";
const PORT = process.env.PORT || 8800;

const app = express();
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      throw err;
    });
};

app.use(cookieParser());
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/videos", videoRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Someting Went Wrong!!!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(PORT, () => {
  connect();
  console.log("App is running on PORT", PORT);
});
