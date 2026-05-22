import { motion } from "framer-motion";

const faculty = [
  {
    name: "Dr. Pooja Bijlani",
    image: "/faculty/pooja.jpg",
  },
  {
    name: "Mr. Harish Karma",
    image: "/faculty/harish.jpg",
  },
  {
    name: "Mr. Surendra Prabhakar",
    image: "/faculty/surendra.jpg",
  },
  {
    name: "Mr. Hrishabh Dev Saini",
    image: "/faculty/hrishabh.jpg",
  },
  {
    name: "Mr. Dharmendra Mehra",
    image: "/faculty/dharmendra.jpg",
  },
];

function Faculty() {
  return (
    <section className="faculty-section">
      <div className="section-heading">
        <h2>Faculty Details</h2>
        <p>Experienced academicians, practitioners and innovators</p>
      </div>

      <div className="faculty-grid">
        {faculty.map((facultyMember, index) => (
          <motion.div
            className="faculty-card"
            key={index}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.03 }}
          >
            <img
              src={facultyMember.image}
              alt={facultyMember.name}
              className="faculty-img"
            />

            <h3>{facultyMember.name}</h3>

            <p>
              School of Future Skills & Information Technology
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Faculty;