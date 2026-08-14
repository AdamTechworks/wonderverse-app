import { useEffect, useState } from "react";
import {
  getArtworks,
  deleteArtwork,
} from "../services/artworkService";

function Admin() {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadArtworks() {
      try {
        const artworkList = await getArtworks();
        setArtworks(artworkList);
      } catch (err) {
        console.error(err);
        setError("Unable to load artworks.");
      } finally {
        setLoading(false);
      }
    }

    loadArtworks();
  }, []);

   async function handleDelete(artwork) {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${artwork.title}"?`
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteArtwork(artwork._id);

      setArtworks((currentArtworks) =>
        currentArtworks.filter(
          (item) => item._id !== artwork._id
        )
      );
    } catch (err) {
      console.error(err);
      window.alert("Unable to delete artwork.");
    }
  }

  if (loading) {
    return <p>Loading artworks...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="admin-page">
      <h1>Admin Dashboard</h1>

      <div className="admin-artwork-list">
        {artworks.map((artwork) => (
          <article key={artwork._id} className="admin-artwork-card">
            <img src={artwork.image} alt={artwork.title} />

            <div>
              <h2>{artwork.title}</h2>
              <p>{artwork.character}</p>
              <p>{artwork.category}</p>
              <p>Display order: {artwork.displayOrder}</p>
              <p>Featured: {artwork.featured ? "Yes" : "No"}</p>

              <button type="button">Edit</button>
              <button type="button"
             onClick={() => handleDelete(artwork)}
              >
                Delete
                </button>

            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Admin;