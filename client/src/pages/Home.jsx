import bgImage from "../assets/gogeta.png";
import "./Home.css";

import welcomeImage from "../assets/dragonball-top.jpg";
import processImage from "../assets/namek.jpg";
import inspirationImage from "../assets/kame-house.webp";

function Home() {
  return (
    <>
      <section className="home-hero">
          <img
            src={bgImage}
            alt="Gogeta"
            className="hero-image"
          />
      <div className="home-overlay">
          <h1>WonderVerse</h1>

          <p>
            Dragon Ball inspired digital art, characters,
            and creative worlds.
          </p>

          <a className="hero-cta" href="#welcome">
          Enter WonderVerse
        </a>
        
        </div>
      </section>
      <section className="home-content">



      <section id="welcome" className="home-section-card">
  <div className="section-image">
     <img src={welcomeImage} alt="Tower Of Power Arena" />
  </div>

  <div className="section-content">
    <h2>Welcome</h2>
    <p>

        Welcome to WonderVerse, a creative space dedicated to my passion for

        digital art, character design, and continuous growth as a software

        developer. Inspired by the worlds, stories, and characters that shaped

        my creativity, this project serves as both an art gallery and a

        portfolio documenting my journey as a creator.



        Here you'll find Dragon Ball inspired artwork, character studies,

        transformation concepts, and future creative projects, along with

        insights into the techniques and processes behind each piece. As I

        continue developing my skills in React, JavaScript, and modern web

        technologies, WonderVerse will evolve alongside me, combining artistic

        expression with professional software development.



        Whether you're here to explore my artwork, follow my creative process,

        or learn more about my work as a developer, thank you for visiting and

        being part of the journey.

      </p>

      <h2>About WonderVerse</h2>

      <p>
        WonderVerse is a digital art portfolio inspired by anime, character
        design, and visual storytelling. The site is also a full-stack
        development project where I can practice React, modern UI design,
        responsive layouts, routing, CRUD functionality, and backend
        integration as the app grows.
      </p>

  </div>
      </section>

      <section className="home-section-card process-section">
      <div className="section-content">
        <h2>How It's Made</h2>

        <p>
          Each piece starts with a pose, transformation, or emotional moment.
          From there, I build the composition through sketching, color blocking,
          lighting, aura effects, and final polish.
        </p>

        <div className="process-steps">
          <span>Sketch</span>
          <span>Color</span>
          <span>Effects</span>
          <span>Final Art</span>
        </div>
     </div>

  <div className="section-image">
    <img src={processImage} alt="Artwork process" />
  </div>
</section>

    <section className="home-section-card inspiration-section">
  <div className="section-image">
    <img src={inspirationImage} alt="Dragon Ball inspiration" />
  </div>

  <div className="section-content">
    <h2>Creative Inspiration</h2>

    <p>
      WonderVerse draws inspiration from the cinematic storytelling,
      transformations, and emotional moments that make Dragon Ball so
      memorable. Rather than recreating scenes, I study their composition,
      lighting, movement, and atmosphere to create original artwork with
      its own identity.
    </p>

    <div className="inspiration-tags">
      <span>Transformations</span>
      <span>Storytelling</span>
      <span>Lighting</span>
      <span>Energy Effects</span>
      <span>Composition</span>
    </div>
  </div>
 </section>

    <a className="gallery-cta" href="/gallery">
              Enter Gallery
      </a>

</section>
    </>
  );
}

export default Home;