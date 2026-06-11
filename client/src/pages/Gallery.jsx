import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { artworks } from "../data/artworkData";
import "./Gallery.css";

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredArtwork = artworks[currentIndex];

  const [selectedArtwork, setSelectedArtwork] = useState(artworks[0]);
  const detailSectionRef = useRef(null);

  function handleArtworkClick(artwork) {
  setSelectedArtwork(artwork);

  setTimeout(() => {
    detailSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 100);
}

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === artworks.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
  <section className="gallery-page">

    
    <h1>Gallery</h1>

    <article className="featured-artwork"
     onClick={() => handleArtworkClick(featuredArtwork)}
     >
        <AnimatePresence mode="wait">

        <motion.img
            key={featuredArtwork.id}
            src={featuredArtwork.image}
            alt={featuredArtwork.title}
            initial={{
                opacity: 0,
                x: 60,
            }}
            animate={{
                opacity: 1,
                x: 0,
            }}
            exit={{
                opacity: 0,
                x: -60,
            }}
            transition={{
                duration: 0.85,
                ease: "easeOut",
            }}
     />

        </AnimatePresence>

      <div>
        <p>{featuredArtwork.category}</p>
        <h2>{featuredArtwork.title}</h2>
        <p>{featuredArtwork.character}</p>
        <p>{featuredArtwork.description}</p>
      </div>
    </article>


    <div className="gallery-grid">
      {artworks.map((artwork) => (
        <article className="gallery-card"
          key={artwork.id}
          onClick={() => handleArtworkClick(artwork)}
        >
          <img src={artwork.image} alt={artwork.title} />
          <h3>{artwork.title}</h3>
          <p>{artwork.character}</p>
    </article>
      ))}
    </div>

    <section className="timelapse-section" ref={detailSectionRef}>
      <div className="selected-artwork-preview">
        <img src={selectedArtwork.image} alt={selectedArtwork.title} />

        <div>
          <p>{selectedArtwork.category}</p>
          <h2>{selectedArtwork.title}</h2>
          <p>{selectedArtwork.description}</p>
        </div>
      </div>

      <div className="timelapse-preview">
        <p>Timelapse Coming Soon</p>
      </div>
    </section>

  </section>
 );
}

export default Gallery;