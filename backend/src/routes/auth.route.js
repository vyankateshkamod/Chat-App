import express from "express";
import { login, logout, signup } from "../controllers/controllers.auth.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { updateProfile } from "../controllers/controllers.auth.js"
import { checkAuth } from "../controllers/controllers.auth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login)
router.post("/logout", logout)

router.put("/update-profile", protectRoute, updateProfile);

router.get("/check",protectRoute,checkAuth) ;

export default router;