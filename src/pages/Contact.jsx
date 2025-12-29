import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">
        <h2>Contact Us</h2>
        <p>Hubungi kami </p>

        <div className="contact-card">
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>

          <div className="contact-info">
            <h3>Our Info</h3>
            <p>📍 Dewantara Palopo Polytechnic</p>
            <p>📧 multimedia@trmc.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
