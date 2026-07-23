import express from "express";
import { getArtworks } from "../controllers/artworkController.js";

const router = express.Router();

router.get("/", getArtworks);

export default router;