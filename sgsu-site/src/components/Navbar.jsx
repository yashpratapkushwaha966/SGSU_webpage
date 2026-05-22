import { useState } from "react";
import { motion } from "framer-motion";


function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

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

      <button className="menu-btn" onClick={() => setOpen(!open)}>
        {open ? "✕" : "☰"}
      </button>

      <ul className={open ? "nav-links active" : "nav-links"}>
        <li><a onClick={closeMenu} href="#hero">Home</a></li>
        <li><a onClick={closeMenu} href="#about">About</a></li>
        <li><a onClick={closeMenu} href="#programmes">Programmes</a></li>
        <li><a onClick={closeMenu} href="#achievements">Achievements</a></li>
        <li><a onClick={closeMenu} href="#contact">Contact</a></li>
      </ul>

      <a href="#contact" className="nav-btn">Apply Now</a>
    </motion.nav>
  );
}

export default Navbar;