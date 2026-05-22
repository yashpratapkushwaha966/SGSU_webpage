import { motion } from "framer-motion";

function About() {
  return (
    <section className="about-section" id="about">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>About School</h2>
        <p>School of Future Skills & Information Technology</p>
      </motion.div>

      <div className="about-grid">
        <motion.div className="about-card dark" whileHover={{ y: -8 }}>
          <h3>About School</h3>
          <p>
            The School of Future Skills and Information Technology is committed
            to nurturing future-ready professionals equipped with the knowledge,
            creativity and adaptability required to lead in the digital age.
          </p>
          <p>
            The School blends academic excellence with practical innovation,
            preparing students to excel in fast-evolving technology landscapes
            and global digital ecosystems.
          </p>
        </motion.div>

        <motion.div className="about-card" whileHover={{ y: -8 }}>
          <h3>Industry Focus</h3>
          <p>
            With a strong focus on experiential learning, industry collaboration
            and research orientation, the School empowers students to design
            intelligent solutions and drive digital transformation.
          </p>
        </motion.div>

        <motion.div className="about-card" whileHover={{ y: -8 }}>
          <h3>Our Vision</h3>
          <p>
            To empower learners with future-ready skills, cutting-edge knowledge
            and a growth mindset to thrive in global industries.
          </p>
        </motion.div>

        <motion.div className="about-card" whileHover={{ y: -8 }}>
          <h3>Our Mission</h3>
          <p>
            To deliver transformative education blending academic rigor with
            real-world application through 60% practical and 40% theory,
            advanced labs, live projects and internships.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;