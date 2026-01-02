import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Members from "./pages/Members";
import ClassGallery from "./pages/ClassGallery";
import Maps from "./pages/Maps";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import RateUs from "./pages/RateUs";

function App() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="members">
        <Members />
      </section>

      <section id="ClassGallery">
        <ClassGallery />
      </section>

      <section id="Maps">
        <Maps />
      </section>

      <section id="Contact">
        <Contact />
      </section>

<section id="RateUs">
  <RateUs />
</section>

      <section id="Footer">
        <Footer />
      </section>
    </>
  );
}

export default App;
