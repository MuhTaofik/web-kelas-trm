import { useEffect, useRef, useState } from "react";
import "./RateUs.css";

const ADMIN_PASSWORD = "trmc";

const RateUs = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [name, setName] = useState("");

  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  /* LOAD DATA */
  useEffect(() => {
    const savedComments = localStorage.getItem("rate-comments");
    const adminStatus = localStorage.getItem("rate-admin");

    if (savedComments) setComments(JSON.parse(savedComments));
    if (adminStatus === "true") setIsAdmin(true);
  }, []);

  /* ANIMASI MASUK */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow(true),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* SUBMIT KOMENTAR */
  const handleSubmit = () => {
    if (!name.trim() || !comment.trim() || rating === 0) {
      alert("Lengkapi nama, rating, dan komentar");
      return;
    }

    const newComment = {
      name,
      text: comment,
      rating,
      date: new Date().toLocaleDateString("id-ID"),
    };

    const updated = [newComment, ...comments];
    setComments(updated);
    localStorage.setItem("rate-comments", JSON.stringify(updated));

    setName("");
    setComment("");
    setRating(0);
  };

  /* ADMIN LOGIN */
  const handleAdminLogin = () => {
    const pass = prompt("Masukkan password admin:");
    if (pass === ADMIN_PASSWORD) {
      setIsAdmin(true);
      localStorage.setItem("rate-admin", "true");
      alert("Mode Admin Aktif");
    } else {
      alert("Password salah");
    }
  };

  /* HAPUS KOMENTAR */
  const deleteComment = (index) => {
    const updated = comments.filter((_, i) => i !== index);
    setComments(updated);
    localStorage.setItem("rate-comments", JSON.stringify(updated));
  };

  return (
    <section
      className={`rate-section ${show ? "show" : ""}`}
      id="rate"
      ref={sectionRef}
    >
      <h2>Rate Us</h2>
      <p>Berikan penilaian & komentar kamu</p>

      {!isAdmin && (
        <button className="admin-btn" onClick={handleAdminLogin}>
          Admin
        </button>
      )}

      {/* FORM */}
      <div className="rate-box">
        <input
          type="text"
          placeholder="Nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={rating >= star ? "active" : ""}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>

        <textarea
          placeholder="Tulis komentar kamu..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button onClick={handleSubmit}>Kirim</button>
      </div>

      {/* LIST KOMENTAR */}
      <div className="comment-list">
        {comments.map((c, i) => (
          <div className="comment-card" key={i}>
            {isAdmin && (
              <span className="delete-btn" onClick={() => deleteComment(i)}>
                ❌
              </span>
            )}
            <h4>{c.name}</h4>
            <div className="comment-stars">{"★".repeat(c.rating)}</div>
            <p>{c.text}</p>
            <span className="date">{c.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RateUs;
