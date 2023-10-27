import express from "express";
import { signin, signup } from "../controllers/auth.js";

const router = express.Router();

{
  /**
    CREATE A USER
    SIGN IN
    GOOGLE AUTH
*/
}

// Create a User
router.post("/signup", signup);

// Sign In
router.post("/signin", signin);

//Google Auth
router.post("/google");

// router.get("/auth", signup);

export default router;
