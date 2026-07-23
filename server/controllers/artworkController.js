import Artwork from "../models/Artwork.js";

export const getArtworks = async (req, res) => {
  try {
    const artworks = await Artwork.find();

    res.status(200).json(artworks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};