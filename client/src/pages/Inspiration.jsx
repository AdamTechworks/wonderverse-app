import "./Inspiration.css";

function Inspiration() {
    return (
        <section className="inspiration-page">
      <h1>Creative Influences</h1>

      <p>
        The stories, artists, worlds, and technologies that inspire my
        artwork, creativity, and development journey.
      </p>

      <div className="inspiration-grid">

        <article className="inspiration-card">
          <h2>Dragon Ball</h2>
          <p>
            Dynamic action, powerful character transformations, and
            imaginative world building.
          </p>
        </article>

        <article className="inspiration-card">
          <h2>Akira Toriyama</h2>
          <p>
            Character design, storytelling, humor, and creative vision
            that shaped generations of artists.
          </p>
        </article>

        <article className="inspiration-card">
          <h2>Digital Artists</h2>
          <p>
            Modern illustrators and creators pushing visual storytelling,
            lighting, and composition.
          </p>
        </article>

        <article className="inspiration-card">
          <h2>Software Projects</h2>
          <p>
            Applications, user experiences, and modern web development
            that inspire technical growth.
          </p>
        </article>

        <article className="inspiration-card">
          <h2>Game Worlds</h2>
          <p>
            Immersive environments, exploration, lore, and visual design
            from memorable games.
          </p>
        </article>

        <article className="inspiration-card">
          <h2>Future Goals</h2>
          <p>
            Becoming a stronger artist and software developer while
            building creative projects that inspire others.
          </p>
        </article>

      </div>
    </section>
    );
}

export default Inspiration;