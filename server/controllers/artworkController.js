import Artwork from "../models/Artwork.js";

//GET
export const getArtworks = async (req, res) => {
  try {
    const artworks = await Artwork.find().sort({ DisplayOrder: 1 });

    res.status(200).json({
      success: true,
      count: artworks.length,
      data: artworks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to retrieve artworks, get error",
      error: error.message,
    });
  }
};

//POST

export const createArtwork = async (req, res) => {
  try {
    const artwork = await Artwork.create(req.body);

    res.status(201).json({
      success: true,
      message: "Artwork created successfully",
      data: artwork,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Unable to create artwork, post error",
      error: error.message,
    });
  }
};


// GET
export const getArtworkById = async (req, res) => {
  try {
    const artwork = await Artwork.findById(req.params.id);

    if (!artwork) {
      return res.status(404).json({
        success: false,
        message: "Artwork not found",
      });
    }

    res.status(200).json({
      success: true,
      data: artwork,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Unable to retrieve artwork, getArtworkById error",
      error: error.message,
    });
  }
};


// PUT 
export const updateArtwork = async (req, res) => {
  try {
    const artwork = await Artwork.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!artwork) {
      return res.status(404).json({
        success: false,
        message: "Artwork not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Artwork updated successfully",
      data: artwork,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Unable to update artwork, put error",
      error: error.message,
    });
  }
};


// DELETE
export const deleteArtwork = async (req, res) => {
  try {
    const artwork = await Artwork.findByIdAndDelete(req.params.id);

    if (!artwork) {
      return res.status(404).json({
        success: false,
        message: "Artwork not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Artwork deleted successfully",
      data: artwork,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Unable to delete artwork, delete error",
      error: error.message,
    });
  }
};