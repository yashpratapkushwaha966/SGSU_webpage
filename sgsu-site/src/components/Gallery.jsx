import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1736496503629-2d64fafca24e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbGxhZ2UlMjBjYW1wdXN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=80",
];

function Gallery() {
  return (
    <section className="gallery-section">
      <div className="section-heading">
        <h2>Campus Life & Best Practices</h2>
        <p>Hackathons, global certification, educational visits and AI literacy mission</p>
      </div>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <motion.div
            className="gallery-card"
            key={index}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={img} alt="SGSU Campus" loading="lazy" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;