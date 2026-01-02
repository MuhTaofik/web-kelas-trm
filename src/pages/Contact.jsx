import "./Contact.css";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="section contact-section" id="contact">
      <h2>Contact</h2>

      <a
        href="https://www.instagram.com/multimedia_engineering_3c?utm_source=qr&igsh=aHg5anpqMWMwNWRk"
        target="_blank"
        rel="noopener noreferrer"
        className="instagram-link"
      >
        <FaInstagram className="ig-icon" />
        <span>Multimedia_Engineering_Technology</span>
      </a>
    </section>
  );
};

export default Contact;
