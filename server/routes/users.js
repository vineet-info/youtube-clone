import express from "express";
import {
  getUser,
  update,
  deleteUser,
  subscribe,
  unsubscribe,
  like,
  dislike,
} from "../controllers/user.js";
import { verifyToken } from "../VerifyToken.js";

const router = express.Router();

// router.get("/test", test);

// Update User
router.put("/:id", verifyToken, update);

// Delete User
router.delete("/:id", verifyToken, deleteUser);

// get a user
router.get("/find/:id", getUser);

// subscribe a user
router.put("/sub/:id", verifyToken, subscribe);

// unscribe a user
router.put("/unsub/:id", verifyToken, unsubscribe);

// like a video
router.put("/like/:VideoId", verifyToken, like);

// dislike a video
router.put("/dislike/:VideoId", verifyToken, dislike);

export default router;
