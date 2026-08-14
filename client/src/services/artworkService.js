const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function getArtworks() {
  const response = await fetch(`${API_BASE_URL}/api/artworks`);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch artworks: ${response.status}`
    );
  }

  const result = await response.json();

  return result.data || [];
}

export async function createArtwork(artworkData) {
  const response = await fetch(`${API_BASE_URL}/api/artworks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(artworkData),
  });

  if (!response.ok) {
    throw new Error("Failed to create artwork");
  }

  const result = await response.json();

  return result.data;
}

export async function updateArtwork(id, artworkData) {
  const response = await fetch(
    `${API_BASE_URL}/api/artworks/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(artworkData),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update artwork");
  }

  const result = await response.json();

  return result.data;
}

export async function deleteArtwork(id) {
  const response = await fetch(
    `${API_BASE_URL}/api/artworks/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to delete artwork");
  }

  const result = await response.json();

  return result.data;
}