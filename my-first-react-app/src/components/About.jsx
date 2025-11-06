import '../styles/about.css';
import { useEffect, useRef } from 'react';

export default function About() {
  const revealRef = useRef(null);

  useEffect(() => {
    const node = revealRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className='about' id='about'>
      <div ref={revealRef} className='about-content reveal'>
        <div className='about-header'>
          <span className='about-eyebrow'>Who I Am</span>
          <h2 className='about-title'>About Me</h2>
          <span className='about-underline'></span>
        </div>

        <div className='about-grid'>
          <div className='about-text'>
            <p>
              Hello! I'm <span className='highlight-name'>Nimra Abdul Jabbar</span>, a{' '}
              <span className='highlight-role'>Full-Stack MERN Developer</span>. I love creating
              web experiences that are <span className='highlight-keyword'>fast, beautiful, and accessible</span>.
            </p>

            <p>
              I work with <span className='tech-tag'>JavaScript</span>, <span className='tech-tag'>React</span>,
              <span className='tech-tag'>Node.js</span>, <span className='tech-tag'>Express</span>,
              <span className='tech-tag'>MongoDB</span>, and <span className='tech-tag'>CSS</span>.
              My focus is clean code, elegant UI, and smooth UX.
            </p>

            <div className='about-badges'>
              <span className='badge'>React</span>
              <span className='badge'>Node.js</span>
              <span className='badge'>Express</span>
              <span className='badge'>MongoDB</span>
              <span className='badge'>JavaScript</span>
              <span className='badge'>CSS</span>
            </div>

            <div className='about-ctas'>
              <a className='btn btn-primary' href='/Nimra_Resume.pdf' download>Download CV</a>
              <a className='btn btn-ghost' href='#contact'>Contact Me</a>
            </div>
          </div>

          <div className='about-visual'>
            <div className='visual-placeholder'>
              {/* You can replace this with a modern illustration or icon */}
              <span>💻</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
