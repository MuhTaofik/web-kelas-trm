import "./ClassGallery.css";

import g1 from "../assets/gallery/foto1.jpeg";
import g2 from "../assets/gallery/foto2.jpeg";
import g3 from "../assets/gallery/foto3.jpeg";
import g4 from "../assets/gallery/foto4.jpeg";
import g5 from "../assets/gallery/foto5.jpeg";
import g6 from "../assets/gallery/foto6.jpeg";
import g7 from "../assets/gallery/foto7.jpeg";
import g8 from "../assets/gallery/foto8.jpeg";
import g9 from "../assets/gallery/foto9.jpeg";
import g10 from "../assets/gallery/foto10.jpeg";
import g11 from "../assets/gallery/foto11.jpeg";
import g12 from "../assets/gallery/foto12.jpeg";

const images = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12];

const ClassGallery = () => {
  return (
    <section className="gallery-section" id="gallery">
      <h1>Class Gallery</h1>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-card" key={index}>
            <img src={img} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClassGallery;
