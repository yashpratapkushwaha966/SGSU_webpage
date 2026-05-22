import { motion } from "framer-motion";

const placements = [
  {
    name: "Kanak Kishore",
    image: "/images/kanak.jpg",
  },
  {
    name: "Kartik",
    image: "/images/kartik.jpg",
  },
  {
    name: "Shaily",
    image: "/images/shaily.jpg",
  },
  {
    name: "Suyash Acharya",
    image: "/images/suyash.jpg",
  },
  {
    name: "Swati",
    image: "/images/swati.jpg",
  },
];

function BestPractices() {
  return (
    <section className="best-section" id="achievements">
      <div className="section-heading">
        <h2>Placements & Best Practices</h2>
        <p>Student success, hackathons, certifications and educational visits</p>
      </div>

      <div className="placement-grid">
        {placements.map((student, index) => (
          <motion.div
            className="placement-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={student.image} alt={student.name} />
            <h3>{student.name}</h3>
            <p>Placed Student</p>
          </motion.div>
        ))}
      </div>

      <div className="best-grid">
        <motion.div className="best-card" whileHover={{ y: -8 }}>
          <img src="/images/certificate.jpg" alt="Global Certification" />
          <div className="best-content">
            <h3>Global Certification</h3>
            <p>
              Students gain exposure through certification programs, practical
              training and future technology workshops.
            </p>
          </div>
        </motion.div>

        <motion.div className="best-card" whileHover={{ y: -8 }}>
          <img src="/images/hackathon.jpg" alt="Hackathons" />
          <div className="best-content">
            <h3>Hackathons</h3>
            <p>
              Students participate in hackathons, innovation events, startup
              challenges and smart technology competitions.
            </p>
          </div>
        </motion.div>

        <motion.div className="best-card" whileHover={{ y: -8 }}>
          <img src="/images/visit.jpg" alt="Educational Visits" />
          <div className="best-content">
            <h3>Educational Visits</h3>
            <p>
              Educational visits help students understand real-world industry
              practices and practical implementation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default BestPractices;