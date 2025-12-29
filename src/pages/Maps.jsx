import "./Maps.css";

const Maps = () => {
  return (
    <section className="maps-section" id="maps">
      <div className="maps-wrapper">
        <h2>Lokasi</h2>
        <p>Politeknik Dewantara Palopo</p>

        <div className="maps-card">
          <iframe
            title="Maps Kampus"
            src="https://www.google.com/maps?q=Dewantara%20Palopo%20Polytechnic&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Maps;
