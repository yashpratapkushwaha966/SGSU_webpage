import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      className="main-navbar"
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="nav-logo">
        <h2>SGSU</h2>
        <span>Future Skills & IT</span>
      </div>

      <ul>
  <li>
    <a href="#hero">Home</a>
  </li>

  <li>
    <a href="#about">About</a>
  </li>

  <li>
    <a href="#programmes">Programmes</a>
  </li>

  <li>
    <a href="#achievements">Achievements</a>
  </li>

  <li>
    <a href="#contact">Contact</a>
  </li>
</ul>

      <button className="nav-btn">Apply Now</button>
    </motion.nav>
  );
}

export default Navbar;