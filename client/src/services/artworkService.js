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