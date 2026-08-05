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
      trim: true,
    },

    character: {
      type: String,
      default: "",
      trim: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String,
      required: true,
      trim: true,
    },

    featured: {
      type: Boolean,
      default: false,
    },
    
    displayOrder: {
      type: Number,
      required: true,
    },
    
    timelapse: {
      type: String,
      default: "",
      trim: true,
    },

    youtube: {
      type: String,
      default: "",
      trim: true,
    },

    inspiration: {
      previewImage: {
        type: String,
        default: "",
        trim: true,
      },

      text: {
        type: String,
        default: "",
        trim: true,
      },

      youtube: {
        type: String,
        default: "",
        trim: true,
      },
    },
  },
  {
    timestamps: true,
  }
);


const Artwork = mongoose.model("Artwork", artworkSchema);

export default Artwork;