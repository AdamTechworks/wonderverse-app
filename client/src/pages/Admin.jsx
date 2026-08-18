import { useEffect, useState } from "react";
import {
  getArtworks,
  deleteArtwork,
  updateArtwork,
  createArtwork,
} from "../services/artworkService";
import "./Admin.css";

function Admin() {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingArtwork, setEditingArtwork] = useState(null);
  const [isAddingArtwork, setIsAddingArtwork] = useState(false);

const [newArtwork, setNewArtwork] = useState({
  title: "",
  character: "",
  category: "",
  description: "",
  image: "",
  timelapse: "",
  youtube: "",
  featured: false,
  displayOrder: artworks.length + 1,
  inspiration: {
    previewImage: "",
    text: "",
    youtube: "",
  },
});

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

   async function handleSave() {
    try {
      const updatedArtwork = await updateArtwork(
        editingArtwork._id,
        editingArtwork
      );

      setArtworks((currentArtworks) =>
        currentArtworks.map((artwork) =>
          artwork._id === updatedArtwork._id
            ? updatedArtwork
            : artwork
        )
      );

      setEditingArtwork(null);
    } catch (err) {
      console.error(err);
      window.alert("Unable to update artwork.");
    }
  }

  async function handleAddArtwork() {
  try {
    const createdArtwork = await createArtwork(newArtwork);

      setArtworks((currentArtworks) => [
        ...currentArtworks,
        createdArtwork,
      ]);

      setIsAddingArtwork(false);

      setNewArtwork({
        title: "",
        character: "",
        category: "",
        description: "",
        image: "",
        timelapse: "",
        youtube: "",
        featured: false,
        displayOrder: artworks.length + 2,
        inspiration: {
          previewImage: "",
          text: "",
          youtube: "",
        },
      });
    } catch (err) {
      console.error(err);
      window.alert("Unable to create artwork.");
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

    <button
      type="button"
      onClick={() => {
      setNewArtwork((current) => ({
        ...current,
        displayOrder: artworks.length + 1,
      }));

  setIsAddingArtwork(true);
}}
    >
      Add New Artwork
  </button>

  {isAddingArtwork && (
    <div className="admin-modal-overlay">

    <form className="admin-form admin-add-form">

      <h2>Add New Artwork</h2>

      <label>
        Title
        <input
          type="text"
          value={newArtwork.title}
          onChange={(event) =>
            setNewArtwork({
              ...newArtwork,
              title: event.target.value,
            })
          }
        />
      </label>

      <label>
        Character
        <input
          type="text"
          value={newArtwork.character}
          onChange={(event) =>
            setNewArtwork({
              ...newArtwork,
              character: event.target.value,
            })
          }
        />
      </label>

      <label>
        Category
        <input
          type="text"
          value={newArtwork.category}
          onChange={(event) =>
            setNewArtwork({
              ...newArtwork,
              category: event.target.value,
            })
          }
        />
      </label>

      <label>
        Description
        <textarea
          value={newArtwork.description}
          onChange={(event) =>
            setNewArtwork({
              ...newArtwork,
              description: event.target.value,
            })
          }
        />
      </label>

      <label>
        Image Path
        <input
          type="text"
          value={newArtwork.image}
          onChange={(event) =>
            setNewArtwork({
              ...newArtwork,
              image: event.target.value,
            })
          }
        />
      </label>

      <label>
        Timelapse Path
        <input
          type="text"
          value={newArtwork.timelapse}
          onChange={(event) =>
            setNewArtwork({
              ...newArtwork,
              timelapse: event.target.value,
            })
          }
        />
      </label>

      <label>
        YouTube URL
        <input
          type="text"
          value={newArtwork.youtube}
          onChange={(event) =>
            setNewArtwork({
              ...newArtwork,
              youtube: event.target.value,
            })
          }
        />
      </label>

      <label>
        Display Order
        <input
          type="number"
          value={newArtwork.displayOrder}
          onChange={(event) =>
            setNewArtwork({
              ...newArtwork,
              displayOrder: Number(event.target.value),
            })
          }
        />
      </label>

      <label>
        Featured
        <input
          type="checkbox"
          checked={newArtwork.featured}
          onChange={(event) =>
            setNewArtwork({
              ...newArtwork,
              featured: event.target.checked,
            })
          }
        />
      </label>

      <label>
        Inspiration Image
        <input
          type="text"
          value={newArtwork.inspiration.previewImage}
          onChange={(event) =>
            setNewArtwork({
              ...newArtwork,
              inspiration: {
                ...newArtwork.inspiration,
                previewImage: event.target.value,
              },
            })
          }
        />
      </label>

      <label>
        Inspiration Text
        <textarea
          value={newArtwork.inspiration.text}
          onChange={(event) =>
            setNewArtwork({
              ...newArtwork,
              inspiration: {
                ...newArtwork.inspiration,
                text: event.target.value,
              },
            })
          }
        />
      </label>

      <label>
        Inspiration YouTube URL
        <input
          type="text"
          value={newArtwork.inspiration.youtube}
          onChange={(event) =>
            setNewArtwork({
              ...newArtwork,
              inspiration: {
                ...newArtwork.inspiration,
                youtube: event.target.value,
              },
            })
          }
        />
      </label>

      <div>
        <button
          type="button"
          onClick={handleAddArtwork}
        >
          Add Artwork
        </button>

        <button
          type="button"
          onClick={() => setIsAddingArtwork(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
)}


    {editingArtwork && (
      <div className="admin-modal-overlay">

     <form className="admin-form admin-edit-form">

          <h2>Edit Artwork</h2>

          <label>
            Title
            <input
              type="text"
              value={editingArtwork.title}
              onChange={(event) =>
                setEditingArtwork({
                  ...editingArtwork,
                  title: event.target.value,
                })
              }
            />
          </label>

          <label>
            Character
            <input
              type="text"
              value={editingArtwork.character}
              onChange={(event) =>
                setEditingArtwork({
                  ...editingArtwork,
                  character: event.target.value,
                })
              }
            />
          </label>

          <label>
            Category
            <input
              type="text"
              value={editingArtwork.category}
              onChange={(event) =>
                setEditingArtwork({
                  ...editingArtwork,
                  category: event.target.value,
                })
              }
            />
          </label>

          <label>
            Description
            <textarea
              value={editingArtwork.description}
              onChange={(event) =>
                setEditingArtwork({
                  ...editingArtwork,
                  description: event.target.value,
                })
              }
            />
          </label>

          <label>
            Image Path
            <input
              type="text"
              value={editingArtwork.image}
              onChange={(event) =>
                setEditingArtwork({
                  ...editingArtwork,
                  image: event.target.value,
                })
              }
            />
          </label>

          <label>
            Timelapse Path
            <input
              type="text"
              value={editingArtwork.timelapse || ""}
              onChange={(event) =>
                setEditingArtwork({
                  ...editingArtwork,
                  timelapse: event.target.value,
                })
              }
            />
          </label>

          <label>
            YouTube URL
            <input
              type="text"
              value={editingArtwork.youtube || ""}
              onChange={(event) =>
                setEditingArtwork({
                  ...editingArtwork,
                  youtube: event.target.value,
                })
              }
            />
          </label>
          
          <label>
            Inspiration Image
            <input
              type="text"
              value={editingArtwork.inspiration?.previewImage || ""}
              onChange={(event) =>
                setEditingArtwork({
                  ...editingArtwork,
                  inspiration: {
                    ...editingArtwork.inspiration,
                    previewImage: event.target.value,
                  },
                })
              }
            />
          </label>

          <label>
            Inspiration Text
            <textarea
              value={editingArtwork.inspiration?.text || ""}
              onChange={(event) =>
                setEditingArtwork({
                  ...editingArtwork,
                  inspiration: {
                    ...editingArtwork.inspiration,
                    text: event.target.value,
                  },
                })
              }
            />
          </label>

          <label>
            Inspiration YouTube URL
            <input
              type="text"
              value={editingArtwork.inspiration?.youtube || ""}
              onChange={(event) =>
                setEditingArtwork({
                  ...editingArtwork,
                  inspiration: {
                    ...editingArtwork.inspiration,
                    youtube: event.target.value,
                  },
                })
              }
            />
          </label>


          <label>
            Display Order
            <input
              type="number"
              value={editingArtwork.displayOrder}
              onChange={(event) =>
                setEditingArtwork({
                  ...editingArtwork,
                  displayOrder: Number(event.target.value),
                })
              }
            />
          </label>

          <label>
            Featured
            <input
              type="checkbox"
              checked={editingArtwork.featured}
              onChange={(event) =>
                setEditingArtwork({
                  ...editingArtwork,
                  featured: event.target.checked,
                })
              }
            />
          </label>

          <div>
            
            <button
              type="button"
              onClick={handleSave}
            >
              Save Changes
            </button>

            <button
              type="button"
              onClick={() => setEditingArtwork(null)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    )}

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

              <button
              type="button"
              onClick={() => setEditingArtwork(artwork)}
              >
              Edit
            </button>

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