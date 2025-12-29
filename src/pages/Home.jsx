import Navbar from "../components/Navbar";
import logoKelas from "../assets/kelas.jpeg";

const Home = () => {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <div style={{ paddingTop: "80px" }}>
        <div
          style={{
            minHeight: "100vh",
            background: "linear-gradient(180deg, #021024, #020b1a)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <img
            src={logoKelas}
            alt="Logo Kelas"
            style={{
              width: "150px",
              maxWidth: "40vw",
              marginBottom: "20px",
            }}
          />

          <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)" }}>
            MULTIMEDIA TECHNOLOGY
          </h1>

          <h2 style={{ marginTop: "10px" }}>TRM C</h2>

          <button
            style={{
              marginTop: "30px",
              padding: "12px 32px",
              borderRadius: "30px",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
            }}
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
          >
            Click to explore
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
