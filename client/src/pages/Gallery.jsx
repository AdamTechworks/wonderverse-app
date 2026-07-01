import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { artworks } from "../data/artworkData";
import "./Gallery.css";

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredArtwork = artworks[currentIndex];

  const [selectedArtwork, setSelectedArtwork] = useState(artworks[0]);

  const [isImageOpen, setIsImageOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  function handleMouseDown() {
    setIsDragging(true);
  }

  function handleMouseUp() {
    setIsDragging(false);
  }

  function handleMouseMove(event) {
    if (!isDragging || zoomLevel <= 1) return;

    setPosition((prev) => ({
      x: prev.x + event.movementX,
      y: prev.y + event.movementY,
    }));
  }

  function handleWheelZoom(event) {
  event.preventDefault();
  event.stopPropagation();

  setZoomLevel((zoom) => {
    const nextZoom =
      event.deltaY < 0 ? zoom + 0.04 : zoom - 0.04;

    return Math.min(3, Math.max(1, nextZoom));
  });
}

  const detailSectionRef = useRef(null);

  function handleArtworkClick(artwork) {
  setSelectedArtwork(artwork);
  setZoomLevel(1);
  setPosition({ x: 0, y: 0 });

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


  useEffect(() => {
  if (isImageOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [isImageOpen]);


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
        <img
          src={selectedArtwork.image}
          alt={selectedArtwork.title}
          onClick={() => {
            setIsImageOpen(true);
            setZoomLevel(1);
            setPosition({ x: 0, y: 0 });
          }}
        />

        <div>
          <p>{selectedArtwork.category}</p>
          <h2>{selectedArtwork.title}</h2>
          <p>{selectedArtwork.description}</p>
        </div>
      </div>


      <div className="timelapse-column">
  {selectedArtwork.timelapse && (
    <>
      <div className="timelapse-preview">
        <video
          src={selectedArtwork.timelapse}
          controls
          controlsList="nodownload"
          disablePictureInPicture
          muted
          loop
          playsInline
        />
      </div>

      <p className="timelapse-note">
        Preview the process here, or watch the complete drawing on YouTube.
      </p>

      {selectedArtwork.youtube && (
        <a
          href={selectedArtwork.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="youtube-button"
        >
          ▶ Watch the Full Process
        </a>
      )}
    </>
  )}

  {!selectedArtwork.timelapse && selectedArtwork.inspiration && (
    <div className="inspiration-process-card">
      <img
        src={selectedArtwork.inspiration.previewImage}
        alt="Creative inspiration"
        className="inspiration-image"
      />

      <h3>🎨 Creative Inspiration</h3>

      <p>{selectedArtwork.inspiration.text}</p>

      <a
        href={selectedArtwork.inspiration.youtube}
        target="_blank"
        rel="noopener noreferrer"
        className="youtube-button"
      >
        ▶ Watch the Original Scene
      </a>
    </div>
  )}
</div>
</section>


{isImageOpen && (
  <div className="image-viewer" onClick={() => setIsImageOpen(false)}>
    <button className="close-viewer">×</button>

    <img
      src={selectedArtwork.image}
      alt={selectedArtwork.title}
      draggable="false"
      onDragStart={(event) => event.preventDefault()}
      onWheel={handleWheelZoom}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onClick={(event) => event.stopPropagation()}
      style={{
        transform: `
          translate(${position.x}px, ${position.y}px)
          scale(${zoomLevel})
        `,
      }}
    />
  </div>
)}

  </section>
 );
}

export default Gallery;