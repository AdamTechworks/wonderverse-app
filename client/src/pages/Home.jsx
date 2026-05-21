import bgImage from "../assets/gogeta.png";
import "./Home.css";

function Home() {
  return (
    <section
      className="home-hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="home-overlay">
        <h1>WonderVerse</h1>

        <p>
          Dragon Ball inspired digital art, characters,
          and creative worlds.
        </p>
      </div>
    </section>
  );
}

export default Home;