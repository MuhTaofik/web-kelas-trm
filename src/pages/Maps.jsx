import { FaMapMarkerAlt } from "react-icons/fa";
import "./Maps.css";

const Maps = () => {
  return (
    <section className="maps-section" id="maps">
      
      {/* ICON + NAMA LOKASI */}
      <div className="maps-header">
        <FaMapMarkerAlt className="maps-icon" />
        <h2>Politeknik Dewantara Palopo</h2>
        <p>Cari rute dari rumahmu ke kampus</p>
      </div>

      {/* MAP */}
      <div className="maps-container">
        <iframe
          title="Maps Polidewa"
          src="https://www.google.com/maps?q=Politeknik%20Dewantara%20Palopo&output=embed"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* BUTTON */}
      <a
        className="maps-button"
        href="https://www.google.com/maps/dir/?api=1&destination=Politeknik+Dewantara+Palopo"
        target="_blank"
        rel="noopener noreferrer"
      >
        📍 Buka Rute di Google Maps
      </a>

    </section>
  );
};

export default Maps;
