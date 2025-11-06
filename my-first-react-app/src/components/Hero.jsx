import '../styles/hero.css';
import { useEffect, useState, useRef } from 'react';

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const roles = ['Full-Stack MERN Developer', 'React Specialist', 'Node.js Expert', 'UI/UX Enthusiast'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentRole = roles[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText.length < currentRole.length) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
      } else if (!isDeleting && displayedText.length === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText.length > 0) {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
      } else if (isDeleting && displayedText.length === 0) {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const techStack = ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'TypeScript'];
  const stats = [
    { value: 20, suffix: '+', label: 'Projects' },
    { value: 10, suffix: '+', label: 'Technologies' },
    { value: 2, suffix: '+', label: 'Years Experience' }
  ];

  return (
    <section className='hero' id='hero' ref={heroRef}>
      <div className='hero-background'>
        <div className='hero-shapes'>
          <div className='shape shape-1'></div>
          <div className='shape shape-2'></div>
          <div className='shape shape-3'></div>
          <div className='shape shape-4'></div>
        </div>
        <div className='grid-pattern'></div>
      </div>

      <div className='hero-container'>
        <div className='hero-content'>
          <div className='hero-greeting'>
            <span className='wave'>👋</span>
            <span className='greeting-text'>Hello, I'm</span>
          </div>
          
          <h1 className='hero-name'>
            <span className='gradient-text'>Nimra</span>
            <span className='name-accent'>Abdul Jabbar</span>
          </h1>

          <div className='hero-role-wrapper'>
            <h2 className='hero-role'>
              <span className='role-prefix'>I'm a </span>
              <span className='role-text'>{displayedText}</span>
              <span className='cursor'>|</span>
            </h2>
          </div>

          <p className='hero-description'>
            Crafting <span className='highlight'>scalable web applications</span> with modern technologies.
            I specialize in building <span className='highlight'>full-stack solutions</span> that combine 
            elegant frontend design with robust backend architecture. Passionate about transforming 
            complex challenges into <span className='highlight'>innovative digital experiences</span>.
          </p>

          <div className='hero-buttons'>
            <a href='#projects' className='hero-btn hero-btn-primary'>
              <span>Explore My Work</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href='#contact' className='hero-btn hero-btn-secondary'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M2.5 5L10 10.833L17.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.5 15L10 20.833L17.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Get In Touch</span>
            </a>
          </div>

          <div className='hero-social'>
            <a 
              href='https://github.com/Shila-Mehta' 
              target='_blank' 
              rel='noreferrer' 
              className='social-link'
              aria-label='GitHub'
            >
              <img src="/Images/github_11378534.png" alt="GitHub" />
            </a>
            <a 
              href='https://www.linkedin.com/in/n-jabbar-1113aa374/' 
              target='_blank' 
              rel='noreferrer' 
              className='social-link'
              aria-label='LinkedIn'
            >
              <img src="/Images/linkedin_4782336.png" alt="LinkedIn" />
            </a>
          </div>
        </div>

        <div className='hero-visual'>
          <div className='code-visualization'>
            <div className='code-window'>
              <div className='code-window-glow'></div>
              <div className='code-window-header'>
                <div className='code-dot'></div>
                <div className='code-dot'></div>
                <div className='code-dot'></div>
                <span className='code-filename'>
                  <span className='file-icon'>📄</span>
                  portfolio.jsx
                </span>
              </div>
              <div className='code-content'>
                <div className='code-line-numbers'>
                  {[1,2,3,4,5,6,7,8,9,10].map(num => (
                    <div key={num} className='line-number'>{num}</div>
                  ))}
                </div>
                <div className='code-text'>
                  <div className='code-line'><span className='code-keyword'>const</span> <span className='code-var'>developer</span> = &#123;</div>
                  <div className='code-line'>  <span className='code-property'>name</span>: <span className='code-string'>'Nimra'</span>,</div>
                  <div className='code-line'>  <span className='code-property'>role</span>: <span className='code-string'>'Full-Stack Developer'</span>,</div>
                  <div className='code-line'>  <span className='code-property'>skills</span>: [</div>
                  <div className='code-line'>    <span className='code-string'>'React'</span>,</div>
                  <div className='code-line'>    <span className='code-string'>'Node.js'</span>,</div>
                  <div className='code-line'>    <span className='code-string'>'MongoDB'</span></div>
                  <div className='code-line'>  ],</div>
                  <div className='code-line'>  <span className='code-property'>passion</span>: <span className='code-string'>'Building amazing apps'</span></div>
                  <div className='code-line'>&#125;;</div>
                  <div className='code-cursor-line'><span className='code-cursor-blink'>|</span></div>
                </div>
              </div>
            </div>
          </div>

          <div className='tech-stack-visual'>
            {techStack.map((tech, index) => (
              <div 
                key={index} 
                className='tech-badge-float'
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {tech}
              </div>
            ))}
          </div>

          <div className={`hero-stats ${statsVisible ? 'visible' : ''}`}>
            {stats.map((stat, index) => (
              <div key={index} className='stat-card' style={{ animationDelay: `${index * 0.1}s` }}>
                <div className='stat-value'>
                  <span className='stat-number'>{stat.value}</span>
                  <span className='stat-suffix'>{stat.suffix}</span>
                </div>
                <div className='stat-label'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='scroll-indicator'>
        <div className='mouse'>
          <div className='wheel'></div>
        </div>
        <div className='arrow'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
}
