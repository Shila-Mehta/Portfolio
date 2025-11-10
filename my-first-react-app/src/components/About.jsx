import { motion } from "framer-motion";
import "../styles/about.css";

const panels = [
  {
    title: "Mindset & Approach",
    text: "I thrive on solving <span class='highlight'>complex problems</span> and turning ideas into <span class='highlight'>impactful solutions</span>."
  },
  {
    title: "Work Style",
    text: "I enjoy <span class='highlight'>collaborating with teams</span>, adapting quickly, and delivering projects with <span class='highlight'>attention to detail</span>."
  },
  {
    title: "Achievements",
    text: "I aim to deliver experiences that are <span class='highlight'>smooth, scalable, and memorable</span>, combining creativity with robust performance.",
    resume: true
  }
];

export default function About() {
  return (
    <section className="about-staggered" id="about">
      <div className="staggered-container">
        {panels.map((panel, idx) => (
          <motion.div
            key={idx}
            className={`staggered-panel panel-${idx}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            viewport={{ once: true }}
            dangerouslySetInnerHTML={{ __html: `<h3 class="panel-title">${panel.title}</h3><p class="panel-text">${panel.text}</p>` }}
          >
          </motion.div>
        ))}
      </div>
      <motion.a
        href="/resume.pdf"
        download="Nimra_Abdul_Jabbar_Resume.pdf"
        className="resume-btn-staggered"
        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(108, 92, 231, 0.6)" }}
      >
        Download Resume
      </motion.a>
    </section>
  );
}
