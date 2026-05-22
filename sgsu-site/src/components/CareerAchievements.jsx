import { motion } from "framer-motion";

const diploma = [
  {
    title: "PGDCA",
    points: [
      "Advanced Programming (Python/Java)",
      "Database & SQL Management",
      "Software Development Lifecycle",
      "IT Project Implementation & Practical Training",
    ],
  },
  {
    title: "DCA",
    points: [
      "Computer Fundamentals & MS Office",
      "Internet Applications & Digital Literacy",
      "Basic Programming Concepts",
      "Office Automation & Documentation Skills",
    ],
  },
];

const jobs = [
  {
    title: "AI-ML",
    points: [
      "Machine Learning Engineer",
      "Data Scientist",
      "AI Research Associate",
      "NLP / Computer Vision Engineer",
    ],
  },
  {
    title: "Cyber Security",
    points: [
      "Cyber Security Analyst",
      "Ethical Hacker",
      "SOC Analyst",
      "Digital Forensics Expert",
    ],
  },
  {
    title: "Software Engineering",
    points: [
      "Software Developer",
      "Full Stack Developer",
      "Mobile Application Developer",
      "DevOps Engineer",
    ],
  },
];

function CareerAchievements() {
  return (
    <section className="career-section">
      <div className="career-grid">
        <motion.div
          className="career-card"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2>Diploma Programmes</h2>

          {diploma.map((item, index) => (
            <div className="info-block" key={index}>
              <h3>{item.title}</h3>
              <ul>
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="career-card"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2>Job Prospects</h2>

          {jobs.map((item, index) => (
            <div className="info-block" key={index}>
              <h3>{item.title}</h3>
              <ul>
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="achievement-card"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2>Student Achievements</h2>
          <h3>Proud moment for SGSU!</h3>

          <p>
            Our creators and innovators from SGSU participated in Hackathon and
            secured 1st position in different themes.
          </p>

          <div className="achievement-box">
            <h4>Mobile & Next Gen App Innovation</h4>
            <p>
              Project: Social Commerce Platform for Local Sellers & Community
              Engagement
            </p>
            <strong>
              Syed Faizan Ali | Irfan Ansari | Lokesh Indoriya | Divyanshu
              Kumar Sahu | Krishna Sarathe
            </strong>
          </div>

          <div className="achievement-box">
            <h4>Smart Mobility, EVs & Logistics</h4>
            <p>Project: EV Charging Station Locator & Slot Booking System</p>
            <strong>Sneh Ranjan Behera | Shantanu Purandare</strong>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CareerAchievements;