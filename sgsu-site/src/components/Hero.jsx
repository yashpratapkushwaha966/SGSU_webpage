import { motion } from "framer-motion";

function Hero() {
  const features = [
    "Industry Integrated Curriculum",
    "Modern AI & Cyber Security Labs",
    "Hackathons & Live Projects",
    "Internship & Placement Support",
    "Global Certification Programs",
  ];

  return (
    <section className="hero-section" id="hero">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>
      <div className="hero-circle"></div>

      <div className="hero-container">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-tag">
            School of Future Skills & Information Technology
          </span>

          <h1>
            Build Your Future in AI-ML, Cyber Security & Emerging Technologies
          </h1>

          <p>
            Industry-integrated, future-focused and hands-on learning for modern
            technology careers with innovation, research and practical exposure.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Explore Courses</button>
            <button className="secondary-btn">Contact Us</button>
          </div>
        </motion.div>

        <motion.div
          className="hero-card-new"
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>Why Choose SGSU?</h2>

          {features.map((item, index) => (
            <div className="hero-feature" key={index}>
              <span>✓</span>
              <p>{item}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;