import express from "express";

import {
  getArtworks,
  createArtwork,
  getArtworkById,
  updateArtwork,
  deleteArtwork,
} from "../controllers/artworkController.js";

const router = express.Router();

router.get("/", getArtworks);
router.post("/", createArtwork);

router.get("/:id", getArtworkById);
router.put("/:id", updateArtwork);
router.delete("/:id", deleteArtwork);

export default router;