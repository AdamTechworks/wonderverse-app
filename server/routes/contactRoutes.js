import express from "express";
import multer from "multer";
import { sendContactEmail } from "../controllers/contactController.js";

const router = express.Router();

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
    ];

    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(
        new Error(
          "Only JPG, PNG, and WebP images are allowed."
        )
      );
    }
  },
});

router.post("/", (req, res, next) => {
  upload.single("photo")(req, res, (error) => {
    if (error instanceof multer.MulterError) {
      if (error.code === "LIMIT_FILE_SIZE") {
        return res.status(400).json({
          success: false,
          message: "Photo must be 5 MB or smaller.",
        });
      }

      return res.status(400).json({
        success: false,
        message: "There was a problem uploading the photo.",
      });
    }

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

    next();
  });
}, sendContactEmail);

export default router;