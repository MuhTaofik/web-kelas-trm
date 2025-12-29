import "./Members.css";

// IMPORT FOTO
import a1 from "../assets/members/taofik.png";
import a2 from "../assets/members/rara.png";
import a3 from "../assets/members/awal.png";
import a4 from "../assets/members/wiwi.png";
import a5 from "../assets/members/wilka.png";
import a6 from "../assets/members/anisa.png";
import a7 from "../assets/members/mirna.png";
import a8 from "../assets/members/novita.png";
import a9 from "../assets/members/sindy.png";
import a10 from "../assets/members/feby.png";
import a11 from "../assets/members/saskia.png";
import a12 from "../assets/members/mitha.png";
import a13 from "../assets/members/sinta.png";
import a14 from "../assets/members/anti.png";
import a15 from "../assets/members/hamryana.png";
import a16 from "../assets/members/lia.png";
import a17 from "../assets/members/elsa.png";
import a18 from "../assets/members/husni.png";

// DATA MEMBER
const membersData = [
  { name: "Muh Taofik", role: "Anggota", photo: a1 },
  { name: "Rara", role: "Anggota", photo: a2 },
  { name: "Awal", role: "Anggota", photo: a3 },
  { name: "Wiwi", role: "Anggota", photo: a4 },
  { name: "Wilka", role: "Anggota", photo: a5 },
  { name: "Anisa", role: "Anggota", photo: a6 },
  { name: "Mirna", role: "Anggota", photo: a7 },
  { name: "Novita", role: "Anggota", photo: a8 },
  { name: "Sindy", role: "Anggota", photo: a9 },
  { name: "Feby", role: "Anggota", photo: a10 },
  { name: "Saskia", role: "Anggota", photo: a11 },
  { name: "Mitha", role: "Anggota", photo: a12 },
  { name: "Sinta", role: "Anggota", photo: a13 },
  { name: "Hasrianti", role: "Anggota", photo: a14 },
  { name: "Hamryana", role: "Anggota", photo: a15 },
  { name: "Lia", role: "Anggota", photo: a16 },
  { name: "Elsa", role: "Anggota", photo: a17 },
  { name: "Husni", role: "Anggota", photo: a18 },
  
];

// KOMPONEN
const Members = () => {
  return (
  <div style={{ padding: "80px 20px", color: "white" }}>
    <h2>Members</h2>

    <div className="members-grid">
      {membersData.map((member, index) => (
        <div className="member-card" key={index}>
          <img src={member.photo} alt={member.name} />
          <h3>{member.name}</h3>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  </div>
);

};

export default Members;
