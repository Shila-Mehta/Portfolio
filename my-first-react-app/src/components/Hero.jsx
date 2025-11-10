import '../styles/hero.css';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";


export default function Hero() {
  const roles = ['Full-Stack Developer', 'React Specialist', 'Node.js Expert'];
  const [displayedText, setDisplayedText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const speed = isDeleting ? 50 : 120;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText.length < role.length) {
        setDisplayedText(role.slice(0, displayedText.length + 1));
      } else if (!isDeleting && displayedText.length === role.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayedText.length > 0) {
        setDisplayedText(role.slice(0, displayedText.length - 1));
      } else if (isDeleting && displayedText.length === 0) {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRole, roles]);

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Hello, I'm <span className="name-highlight">Nimra</span></h1>
          <h2>I'm a <span className="typed-role">{displayedText}<span className="cursor">|</span></span></h2>
          <p>
            Building <span className="highlight">clean, scalable web apps</span> using React, Node.js, and modern technologies.
            I focus on creating <span className="highlight">efficient UI/UX</span> and robust backend solutions.
          </p>
          <div className="hero-buttons">
            <button className="btn primary-btn" onClick={() => scrollToSection('#projects')}>Explore My Work</button>
            <button className="btn secondary-btn" onClick={() => scrollToSection('#contact')}>Contact Me</button>
            <motion.a
              href="/resume.pdf"
              download="Nimra_Abdul_Jabbar_Resume.pdf"
              className="resume-btn-hero  btn  primary-btn"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(108, 92, 231, 0.6)" }}
            >
              Download Resume
            </motion.a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
          <div className="floating-shape shape-4"></div>
        </div>
      </div>
    </section>
  );
}
