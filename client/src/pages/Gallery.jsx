import { useEffect, useState } from "react";
import { artworks } from "../data/artworkData";
import "./Gallery.css";

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredArtwork = artworks[currentIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === artworks.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
  <section className="gallery-page">
    <h1>Gallery</h1>

    <article className="featured-artwork">
      <img src={featuredArtwork.image} alt={featuredArtwork.title} />

      <div>
        <p>{featuredArtwork.category}</p>
        <h2>{featuredArtwork.title}</h2>
        <p>{featuredArtwork.character}</p>
        <p>{featuredArtwork.description}</p>
      </div>
    </article>

    <div className="gallery-grid">
      {artworks.map((artwork) => (
        <article className="gallery-card" key={artwork.id}>
          <img src={artwork.image} alt={artwork.title} />
          <h3>{artwork.title}</h3>
          <p>{artwork.character}</p>
        </article>
      ))}
    </div>
  </section>
 );
}

export default Gallery;