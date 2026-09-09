import "./Admin.css";

import { useState } from "react";
import { loginAdmin } from "../services/authService";

function AdminLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(event) {
  event.preventDefault();

  try {
    const result = await loginAdmin(username, password);

    console.log("Login successful:", result.success);
  } catch (error) {
    console.error("Login failed:", error);
  }
}

  return (
    <section className="admin-login-page">
  <h1>Admin Login</h1>

  <form onSubmit={handleSubmit}>
    <label>
      Username
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
    </label>

    <label>
      Password
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
    </label>

    <button type="submit">
      Log In
    </button>
  </form>
</section>
  );
}

export default AdminLogin;