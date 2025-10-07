// src/components/Education.jsx
import "../styles/education.css";

const Education = () => {
    const educationData = [
        {
            degree: "Full-Stack Web Development",
            institution: "The Odin Project (Remote)",
            duration: "June 2025 – September 2025",
            description:
                "Completed a rigorous, project-based full-stack curriculum, gaining expertise in front-end technologies (HTML, CSS, JavaScript, React) and back-end development (Node.js, Express, MongoDB). Built multiple real-world applications—including a weather app, CV builder, and memory card game—demonstrating clean code practices, responsive UI design, and end-to-end problem-solving skills.",
        },

    {
            degree: "Bachelor of Science in Computer Science",
            institution: "Khawaja Fareed University of Engineering and Technology",
            duration: "2023 - 2027",
            description:
                "Studied core computer science concepts including data structures, algorithms, databases,machine learning, Artificial Intelligence and web development.",
        },
    ];

    return (
        <section className="education-section" id="education">
            <h2 className="education-title">Education</h2>
            <div className="education-list">
                {educationData.map((edu, index) => (
                    <div className="education-card" key={index}>
                        <h3 className="degree">{edu.degree}</h3>
                        <p className="institution">{edu.institution}</p>
                        <p className="duration">{edu.duration}</p>
                        <p className="description">{edu.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
