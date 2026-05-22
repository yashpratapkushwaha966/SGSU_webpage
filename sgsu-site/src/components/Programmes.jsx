import { motion } from "framer-motion";

const programmes = [
  {
    title: "BCA AI-ML",
    points: [
      "Machine Learning Algorithms & Model Development",
      "Python Programming & Data Analysis",
      "Deep Learning",
      "AI Application Development & Deployment",
    ],
  },
  {
    title: "BCA Cyber Security",
    points: [
      "Network Security & Ethical Hacking",
      "Cryptography & Data Protection",
      "Vulnerability Assessment & Penetration Testing",
      "Cyber Law, Digital Forensics & Risk Management",
    ],
  },
  {
    title: "BCA Information Technology",
    points: [
      "Full Stack Web Development",
      "Cloud Computing & DevOps Basics",
      "Database Management Systems",
      "Software Development & System Design",
    ],
  },
  {
    title: "MSc AI-ML",
    points: [
      "Advanced Machine Learning & Deep Learning",
      "Natural Language Processing & Computer Vision",
      "Big Data Analytics & Model Optimization",
      "AI Research, Innovation & Industry Applications",
    ],
  },
  {
    title: "MSc Cyber Security",
    points: [
      "Advanced Threat Intelligence & Incident Response",
      "Security Architecture & Cloud Security",
      "Malware Analysis & Cyber Defense Strategies",
      "Governance, Risk & Compliance",
    ],
  },
];

function Programmes() {
  return (
    <section className="programmes-section" id="programmes">
      <div className="section-heading">
        <h2>Programmes Offered</h2>
        <p>Future-ready courses for modern technology careers</p>
      </div>

      <div className="programme-grid">
        {programmes.map((item, index) => (
          <motion.div
            className="programme-card"
            key={index}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <h3>{item.title}</h3>
            <ul>
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Programmes;