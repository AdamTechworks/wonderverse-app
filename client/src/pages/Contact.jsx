 import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [photo, setPhoto] = useState(null);

  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    setStatusMessage("");
    setStatusType("");

    if (photo && photo.size > 5 * 1024 * 1024) {
      setStatusMessage("Photo must be 5 MB or smaller.");
      setStatusType("error");
      return;
    }

    const formData = new FormData();

    formData.append("firstName", firstName);
    formData.append("email", email);
    formData.append("message", message);

    if (photo) {
      formData.append("photo", photo);
    }

    try {
      setIsSending(true);

      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to send your message.");
      }

      setStatusMessage(result.message);
      setStatusType("success");

      setFirstName("");
      setEmail("");
      setMessage("");
      setPhoto(null);

      event.target.reset();
    } catch (error) {
      setStatusMessage(error.message);
      setStatusType("error");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section className="contact-page">
      <div className="contact-heading">
        <h1>Contact &amp; Collaborations</h1>

        <p>
          Interested in digital artwork, commissions, creative projects,
          collaborations, or software development opportunities? I'd love to
          connect.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          First Name <span aria-hidden="true">*</span>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            autoComplete="given-name"
            required
          />
        </label>

        <label>
          Email <span aria-hidden="true">*</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            required
          />
        </label>

        <label>
          Message <span aria-hidden="true">*</span>
          <textarea
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          />
        </label>

        <label>
          Photo <span className="contact-optional">(optional)</span>
          <input
            type="file"
            name="photo"
            accept="image/jpeg,image/png,image/webp"
            onChange={(event) => {
              const selectedPhoto = event.target.files?.[0] || null;

              if (selectedPhoto && selectedPhoto.size > 5 * 1024 * 1024) {
                setPhoto(null);
                setStatusMessage("Photo must be 5 MB or smaller.");
                setStatusType("error");
                event.target.value = "";
                return;
              }

              setPhoto(selectedPhoto);
              setStatusMessage("");
              setStatusType("");
            }}
          />
          <small>JPG, PNG or WebP. Maximum file size: 5 MB.</small>
        </label>

        <button type="submit" disabled={isSending}>
          {isSending ? "Sending..." : "Send Message"}
        </button>

        {statusMessage && (
          <p
            className={`contact-status ${statusType}`}
            role="status"
            aria-live="polite"
          >
            {statusMessage}
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;