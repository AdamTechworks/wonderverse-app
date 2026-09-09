const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function loginAdmin(username, password) {
  const response = await fetch(
    `${API_BASE_URL}/api/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Invalid username or password");
  }

  const result = await response.json();

  return result;
}