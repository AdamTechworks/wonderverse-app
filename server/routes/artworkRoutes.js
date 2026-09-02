import express from "express";
import { protectAdmin } from "../middleware/authMiddleware.js";

import {
  getArtworks,
  createArtwork,
  getArtworkById,
  updateArtwork,
  deleteArtwork,
} from "../controllers/artworkController.js";

const router = express.Router();

router.get("/", getArtworks);

router.get("/:id", getArtworkById);

router.post("/", protectAdmin, createArtwork);

router.put("/:id", protectAdmin, updateArtwork);

router.delete("/:id", protectAdmin, deleteArtwork);

export default router;