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
      <div className='about-decor about-decor--one'></div>
      <div className='about-decor about-decor--two'></div>

      <div ref={revealRef} className='about-content reveal'>
        <div className='about-header'>
          <span className='about-eyebrow'>Get to know</span>
          <h2 className='about-title'>About Me</h2>
          <span className='about-underline' aria-hidden='true'></span>
        </div>

        <div className='about-grid'>
          <div className='about-text'>
            <p className='text-reveal'>
              I'm <span className='highlight-name'>Nimra Abdul Jabbar</span>, a{' '}
              <span className='highlight-role'>Full-Stack MERN Developer</span>
              {' '}devoted to crafting responsive, accessible, and delightful web experiences. I love
              turning ideas into <span className='highlight-keyword'>interactive interfaces</span> and 
              continuously exploring new technologies.
            </p>

            <p className='text-reveal'>
              My toolkit includes <span className='tech-tag'>JavaScript</span>, <span className='tech-tag'>React</span>,{' '}
              <span className='tech-tag'>Node.js</span>, <span className='tech-tag'>Express</span>,{' '}
              <span className='tech-tag'>MongoDB</span>, <span className='tech-tag'>Git</span>, and modern{' '}
              <span className='tech-tag'>CSS</span>. I focus on clean, maintainable code and thoughtful UX, 
              balancing frontend aesthetics with backend robustness.
            </p>

            <div className='about-badges' aria-label='Key skills'>
              <span className='badge'>React</span>
              <span className='badge'>Node.js</span>
              <span className='badge'>Express</span>
              <span className='badge'>MongoDB</span>
              <span className='badge'>JavaScript</span>
              <span className='badge'>CSS</span>
            </div>

            <div className='about-ctas'>
              <a className='btn btn-primary' href='/Nimra_Resume.pdf' download>
                Download CV
              </a>
              <a className='btn btn-ghost' href='#contact'>
                Contact Me
              </a>
            </div>

            <div className='about-stats' aria-label='Quick stats'>
              <div className='stat'>
                <span className='num'>20+</span>
                <span className='label'>Projects</span>
              </div>
              <div className='stat'>
                <span className='num'>10+</span>
                <span className='label'>Technologies</span>
              </div>
              <div className='stat'>
                <span className='num'>2+</span>
                <span className='label'>Years</span>
              </div>
            </div>
          </div>

          <div className='about-visual'>
            <div className='laptop-container'>
              <div className='laptop-screen'>
                <div className='screen-content'>
                  <div className='code-line'><span className='code-tag'>&lt;div&gt;</span></div>
                  <div className='code-line'><span className='code-keyword'>const</span> <span className='code-var'>developer</span> = <span className='code-string'>'Nimra'</span>;</div>
                  <div className='code-line'><span className='code-function'>build</span>(<span className='code-string'>'Amazing Web Apps'</span>);</div>
                  <div className='code-line'><span className='code-tag'>&lt;/div&gt;</span></div>
                </div>
                <div className='screen-glow'></div>
              </div>
              <div className='laptop-base'></div>
              <div className='laptop-keyboard'></div>
              <div className='tech-icons'>
                <span className='tech-icon'>⚡</span>
                <span className='tech-icon'>💻</span>
                <span className='tech-icon'>🚀</span>
              </div>
              <div className='laptop-glow laptop-glow--primary'></div>
              <div className='laptop-glow laptop-glow--secondary'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
