import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Multimedia_Engineering_Technology</h3>
        <p>
          Website resmi kelas Teknologi Rekayasa Multimedia</p> 
          <p>ANGKATAN 2024
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#members">Members</a>
          <a href="#gallery">Gallery</a>
          <a href="#maps">Maps</a>
          <a href="#contact">Contact</a>
        </div>

        <span className="footer-copy">
          © {new Date().getFullYear()} TRM C.Project.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
