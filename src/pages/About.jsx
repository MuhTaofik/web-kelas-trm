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
      <p>Salam perkenalan semua, kami adalah generasi perubahan yang selama ini dinanti-nantikan.Dan
dalam cinta,kadang hati bisa galau takut salah,takut kehilangan,atau hanya bingung dengan perasaan sendiri.Tapi kami percaya, galau itu wajar, karena dari rasa itu kita belajar lebih peka,menghargai perasaan orang lain, dan memahami arti kesabaran.
Cinta bukan sekadar kata manis atau janji yang mudah diucapkan tapi cinta adalah keberanian untuk tetap bertahan,memberi tanpa menuntut,dan tumbuh bersama meski jalan kadang berliku.Dari setiap jatuh dan salah langkah, kami menemukan motivasi,bangkit,memperbaiki diri, dan terus maju.Karena cinta yang berarti mengajarkan kesabaran, kejujuran, dan keberanian memilih yang benar meski sulit.
Sebagai generasi Gen-Z dari jurusan Multimedia,kami percaya bahwa cinta dan galau itu seperti proses kreatif,kadang berantakan,kadang menakjubkan,tapi selalu punya cerita. Setiap warna,tiap frame,dan tiap suara yang kami buat mengajarkan kesabaran dan ketelitian sama seperti cinta yang perlu dirawat dan dihargai. Kami belajar melihat detail kecil yang sering terlewat, karena di situlah keindahan muncul, baik dalam karya maupun dalam hubungan.
Dalam setiap proyek, kami menghadapi tantangan, revisi tanpa henti, dan ide yang kadang nggak sesuai rencana. Tapi itulah yang membuat hasil akhir memuaskan,dan itulah yang kami terapkan dalam cinta.Jangan takut gagal,jangan takut salah,karena dari situ kita belajar,tumbuh,dan menemukan versi terbaik dari diri sendiri.Di jurusan kami 
Multimedia mengajarkan bahwa kami berani berekspresi,berani mencoba hal baru, dan berbagi cerita baik lewat karya maupun perasaan. Dari situ kami tahu bahwa cinta yang tulus juga butuh keberanian, kreativitas, dan kesabaran, agar setiap momen yang tercipta menjadi sesuatu yang indah dan bermakna.
      </p>
      </div>
    </div>
  );
};

export default About;
