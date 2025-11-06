import '../styles/skills.css';
import { useEffect, useRef } from 'react';

export default function Skills() {
  const containerRef = useRef(null);

  useEffect(() => {
    const rootEl = containerRef.current;
    if (!rootEl) return;

    const categoryCards = Array.from(rootEl.querySelectorAll('.skill-category'));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    categoryCards.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  
  // Map each skill to a representative icon (from Devicon or Simple Icons CDN)
  const skillIconMap = {
    JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',

    HTML: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    CSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    Redux: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    'Chart.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chartjs/chartjs-original.svg',
    Bootstrap: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    Tailwind: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',

    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    EJS: undefined,
    'REST APIs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
    PDFKit: undefined,

    JWT: 'https://cdn.jsdelivr.net/npm/simple-icons@9/icons/jsonwebtokens.svg',
    Stripe: 'https://cdn.jsdelivr.net/npm/simple-icons@9/icons/stripe.svg',
    Multer: undefined,
    NodeMailer: 'https://cdn.jsdelivr.net/npm/simple-icons@9/icons/nodemailer.svg',
    bcrypt: undefined,

    MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    PostgreSQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',

    Docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    GitHub: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
  };

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      color: "#0ea5e9",
      skills: ["JavaScript", "TypeScript", "Java", "Python", "C++"]
    },
    {
      title: "Frontend Development",
      icon: "🎨",
      color: "#6366f1",
      skills: ["HTML", "CSS", "React", "Next.js", "Redux", "Chart.js", "Bootstrap", "Tailwind"]
    },
    {
      title: "Backend & APIs",
      icon: "⚙️",
      color: "#10b981",
      skills: ["Node.js", "Express.js", "REST APIs", "EJS", "PDFKit"]
    },
    {
      title: "Auth & Integrations",
      icon: "🔐",
      color: "#f43f5e",
      skills: ["JWT", "Stripe", "Multer", "NodeMailer", "bcrypt"]
    },
    {
      title: "Databases",
      icon: "🗄️",
      color: "#f59e0b",
      skills: ["MongoDB", "PostgreSQL"]
    },
    {
      title: "DevOps & Tools",
      icon: "🚀",
      color: "#8b5cf6",
      skills: ["Docker", "Git", "GitHub"]
    }
  ];

  return (
    <section className='skills' id='skills' aria-labelledby='skills-title'>
      <div className='skills-container' ref={containerRef}>
        <div className='skills-header'>
          <h2 className='skills-title' id='skills-title'>
            <span className='skills-title-icon'>💼</span>
            Technical Skills
          </h2>
          <p className='skills-subtitle'>
            A comprehensive toolkit of modern technologies and frameworks I leverage to build scalable, 
            efficient, and user-centric applications.
          </p>
        </div>

        <div className='skills-categories'>
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className='skill-category'
              style={{ '--category-color': category.color }}
            >
              <div className='category-header'>
                <span className='category-icon'>{category.icon}</span>
                <h3 className='category-title'>{category.title}</h3>
              </div>
              <div className='category-skills'>
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className='skill-badge'
                    style={{ animationDelay: `${skillIndex * 0.05}s` }}
                  >
                    {skillIconMap[skill] ? (
                      <img
                        className='skill-icon'
                        src={skillIconMap[skill]}
                        alt={`${skill} logo`}
                        loading='lazy'
                        decoding='async'
                        referrerPolicy='no-referrer'
                      />
                    ) : null}
                    <span className='skill-label'>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}