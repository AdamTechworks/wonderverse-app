import mongoose from "mongoose";

const artworkSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    character: {
      type: String,
      default: "",
    },

    category: {
      type: String,
      default: "",
    },

    image: {
      type: String,
      required: true,
    },

    featured: {
      type: Boolean,
      default: false,
    },

    timelapse: {
      type: String,
      default: "",
    },

    youtube: {
      type: String,
      default: "",
    },

    inspiration: {
      previewImage: {
        type: String,
        default: "",
      },

      text: {
        type: String,
        default: "",
      },

      youtube: {
        type: String,
        default: "",
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Artwork", artworkSchema);