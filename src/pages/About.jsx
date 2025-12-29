import { useEffect, useRef, useState } from "react";
import "./About.css";

const About = () => {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page">
      <div
        ref={sectionRef}
        className={`about-card ${show ? "show" : ""}`}
      >
        <h1>About Us</h1>
      <p>
        Kami adalah jurusan Multimedia, tempat ide bertemu kreativitas dan proses belajar tidak hanya soal teori, tetapi juga karya. Di sini kami belajar berpikir kreatif, bekerja sama, dan terus berkembang dari setiap kesalahan.

Setiap tugas mengajarkan kami untuk lebih teliti, lebih sabar, dan lebih percaya diri pada kemampuan sendiri. Kami percaya bahwa proses adalah bagian penting dari hasil, dan setiap langkah kecil yang kami jalani hari ini adalah bekal untuk masa depan. Bersama, kami tumbuh, berkarya, dan mempersiapkan diri untuk menjadi pribadi yang siap menghadapi tantangan dunia kreatif.
      </p>

      <h2>Visi Kelas</h2>
      <p>
       Menjadi kelas multimedia yang kreatif, solid, dan saling mendukung, tumbuh bersama dalam proses belajar, berkarya bareng, dan saling menguatkan sampai tujuan tercapai.
      </p>
      </div>
    </div>
  );
};

export default About;
