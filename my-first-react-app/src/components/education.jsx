// src/components/Education.jsx
import "../styles/education.css";
import { useEffect, useRef } from 'react';

const Education = () => {
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
            { threshold: 0.1 }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    const educationData = [
        {
            degree: "Full-Stack Web Development",
            institution: "The Odin Project (Remote)",
            duration: "June 2025 – September 2025",
            description:
                "Completed a rigorous, project-based full-stack curriculum, gaining expertise in front-end technologies (HTML, CSS, JavaScript, React) and back-end development (Node.js, Express, MongoDB). Built multiple real-world applications—including a weather app, CV builder, and memory card game—demonstrating clean code practices, responsive UI design, and end-to-end problem-solving skills.",
            icon: "🎓",
            type: "Bootcamp",
            status: "Completed",
            progress: 100,
            gpa: null,
            achievements: [
                "Project-based learning with real-world applications",
                "Full-stack MERN stack expertise",
                "Modern development practices and clean code"
            ],
            technologies: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "HTML/CSS"],
            certificate: true,
            projects: "20+",
            courses: "15+"
        },
        {
            degree: "Bachelor of Science in Computer Science",
            institution: "Khawaja Fareed University of Engineering and Technology",
            duration: "2023 - 2027",
            description:
                "Studied core computer science concepts including data structures, algorithms, databases, machine learning, Artificial Intelligence and web development.",
            icon: "🏛️",
            type: "University",
            status: "In Progress",
            progress: 50,
            gpa: "3.8",
            achievements: [
                "Core CS fundamentals and algorithms",
                "Database systems and data structures",
                "AI/ML and modern web technologies"
            ],
            technologies: ["Data Structures", "Algorithms", "Databases", "AI/ML", "Web Development"],
            certificate: false,
            projects: "30+",
            courses: "25+"
        },
    ];

    return (
        <section className="education-section" id="education">
            <div className="education-decor education-decor--one"></div>
            <div className="education-decor education-decor--two"></div>
            
            <div ref={revealRef} className="education-content reveal">
                <div className="education-header">
                    <span className="education-eyebrow">My Journey</span>
                    <h2 className="education-title">Education</h2>
                    <span className="education-underline" aria-hidden="true"></span>
                </div>

                <div className="education-timeline">
                    {educationData.map((edu, index) => (
                        <div 
                            className="education-item" 
                            key={index}
                            data-index={index}
                            style={{ '--delay': `${index * 0.2}s` }}
                        >
                            <div className="timeline-marker">
                                <div className="marker-icon">
                                    <span className="marker-emoji">{edu.icon}</span>
                                    <div className="marker-glow"></div>
                                </div>
                                <div className="marker-line"></div>
                            </div>
                            
                            <div className="education-card">
                                <div className="card-glow"></div>
                                <div className="card-pattern"></div>
                                
                                <div className="card-header">
                                    <div className="card-badge-wrapper">
                                        <div className="card-badge">{edu.type}</div>
                                        {edu.certificate && (
                                            <div className="certificate-badge">
                                                <span className="cert-icon">🏆</span>
                                                <span>Certified</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="card-duration">{edu.duration}</div>
                                </div>
                                
                                <div className="degree-section">
                                    <h3 className="degree">{edu.degree}</h3>
                                    <div className="status-indicator">
                                        <span className={`status-badge status-${edu.status.toLowerCase().replace(' ', '-')}`}>
                                            <span className="status-dot"></span>
                                            {edu.status}
                                        </span>
                                    </div>
                                </div>
                                
                                <p className="institution">
                                    <span className="institution-icon">📍</span>
                                    {edu.institution}
                                </p>
                                
                                <p className="description">{edu.description}</p>
                                
                                {/* Progress Bar */}
                                <div className="progress-section">
                                    <div className="progress-header">
                                        <span className="progress-label">Progress</span>
                                        <span className="progress-value">{edu.progress}%</span>
                                    </div>
                                    <div className="progress-bar">
                                        <div 
                                            className="progress-fill"
                                            style={{ width: `${edu.progress}%` }}
                                        ></div>
                                    </div>
                                </div>
                                
                                {/* Stats Row */}
                                <div className="education-stats">
                                    {edu.gpa && (
                                        <div className="stat-item">
                                            <div className="stat-icon">⭐</div>
                                            <div className="stat-content">
                                                <div className="stat-value">{edu.gpa}</div>
                                                <div className="stat-label">GPA</div>
                                            </div>
                                        </div>
                                    )}
                                    <div className="stat-item">
                                        <div className="stat-icon">📚</div>
                                        <div className="stat-content">
                                            <div className="stat-value">{edu.courses}</div>
                                            <div className="stat-label">Courses</div>
                                        </div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-icon">💼</div>
                                        <div className="stat-content">
                                            <div className="stat-value">{edu.projects}</div>
                                            <div className="stat-label">Projects</div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="achievements">
                                    <h4 className="achievements-title">
                                        <span className="achievements-icon">✨</span>
                                        Key Highlights
                                    </h4>
                                    <ul className="achievements-list">
                                        {edu.achievements.map((achievement, idx) => (
                                            <li 
                                                key={idx} 
                                                className="achievement-item"
                                                style={{ '--item-delay': `${idx * 0.1}s` }}
                                            >
                                                <span className="achievement-icon">✓</span>
                                                <span className="achievement-text">{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div className="tech-stack">
                                    <div className="tech-stack-header">
                                        <span className="tech-icon">🛠️</span>
                                        <span>Technologies</span>
                                    </div>
                                    <div className="tech-chips-wrapper">
                                        {edu.technologies.map((tech, idx) => (
                                            <span 
                                                key={idx} 
                                                className="tech-chip"
                                                style={{ '--chip-delay': `${idx * 0.05}s` }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
