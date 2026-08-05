import dotenv from "dotenv";

import connectDB from "../config/db.js";
import Artwork from "../models/Artwork.js";
import { artworkSeedData } from "../data/artworkSeedData.js";

dotenv.config();

async function seedArtworks() {
  try {
    await connectDB();

    await Artwork.deleteMany();

    const insertedArtworks = await Artwork.insertMany(
      artworkSeedData
    );

    console.log(
      `Seeded ${insertedArtworks.length} artworks successfully`
    );

    process.exit(0);
  } catch (error) {
    console.error(`Seed failed: ${error.message}`);
    process.exit(1);
  }
}

seedArtworks();