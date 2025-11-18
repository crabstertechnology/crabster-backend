import express from "express";
import { addReview, getReviews } from "../controllers/reviews.controller.js";
import { validateReview } from "../middlewares/validateReview.js";

const router = express.Router();

router.get("/", getReviews);
router.post("/", validateReview, addReview);

export default router;
