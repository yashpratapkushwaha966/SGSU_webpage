import { motion } from "framer-motion";

function AiMission() {
  return (
    <section className="ai-section">
      <div className="section-heading">
        <h2>AI Literacy Mission</h2>
        <p>Building awareness and future-ready digital skills</p>
      </div>

      <div className="ai-grid">
        <motion.div
          className="ai-image-box"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img src="/images/ai-mission.jpg" alt="AI Mission" />
        </motion.div>

        <motion.div
          className="ai-content-box"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3>Digital India & AI Awareness</h3>

          <p>
            SGSU promotes AI literacy initiatives, technology awareness
            campaigns and digital transformation activities to empower students
            with modern AI knowledge.
          </p>

          <p>
            Through workshops, mobile AI labs and practical demonstrations,
            students explore Artificial Intelligence, Cyber Security and future
            technologies.
          </p>

          <button className="primary-btn">
            Explore Mission
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default AiMission;