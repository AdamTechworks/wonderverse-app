import bgImage from "../assets/gogeta.png";
import "./Home.css";

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

      <section id="welcome" className="welcome-section">
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
    </section>

    <section className="site-description-section">
    <h2>About WonderVerse</h2>

    <p>
      WonderVerse is a digital art portfolio inspired by anime, character
      design, and visual storytelling. The site is also a full-stack
      development project where I can practice React, modern UI design,
      responsive layouts, routing, CRUD functionality, and backend
      integration as the app grows.
    </p>
  </section>


      <a className="gallery-cta" href="/gallery">
              Enter Gallery
      </a>

    </>
  );
}

export default Home;