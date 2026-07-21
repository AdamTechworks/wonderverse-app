import "./Footer.css";
import { FaYoutube, FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-socials">
          <a
            href="YOUR_YOUTUBE_LINK"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>

          <a
            href="YOUR_INSTAGRAM_LINK"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="YOUR_FACEBOOK_LINK"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="YOUR_X_LINK"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <FaXTwitter />
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Adam Ellison. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;