import '../styles/contact.css';
import { useState, useEffect, useRef } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState({
        submitted: false,
        error: false,
        message: ''
    });
    const revealRef = useRef(null);

    useEffect(() => {
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

        if (revealRef.current) {
            observer.observe(revealRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Form validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setFormStatus({
                submitted: false,
                error: true,
                message: 'Please fill in all fields.'
            });
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setFormStatus({
                submitted: false,
                error: true,
                message: 'Please enter a valid email address.'
            });
            return;
        }

        // Simulate form submission (replace with actual API call)
        setFormStatus({
            submitted: true,
            error: false,
            message: 'Thank you! I\'ll get back to you soon.'
        });

        // Reset form after 3 seconds
        setTimeout(() => {
            setFormData({ name: '', email: '', message: '' });
            setFormStatus({ submitted: false, error: false, message: '' });
        }, 3000);
    };

    const contactMethods = [
        {
            icon: '📧',
            label: 'Email',
            value: 'nimraabduljabbar14@gmail.com',
            href: 'mailto:nimraabduljabbar14@gmail.com',
            color: '#007bff'
        },
        {
            icon: '💼',
            label: 'LinkedIn',
            value: 'Connect with me',
            href: 'https://www.linkedin.com/in/n-jabbar-1113aa374/',
            color: '#0077b5'
        },
        {
            icon: '💻',
            label: 'GitHub',
            value: 'View my code',
            href: 'https://github.com/Shila-Mehta',
            color: '#333'
        }
    ];

    return (
        <section className='contact' id='contact'>
            <div className='contact-decor contact-decor--one'></div>
            <div className='contact-decor contact-decor--two'></div>

            <div ref={revealRef} className='contact-container reveal'>
                <div className='contact-header'>
                    <span className='contact-eyebrow'>Get In Touch</span>
                    <h2 className='contact-title'>Contact Me</h2>
                    <span className='contact-underline' aria-hidden='true'></span>
                    <p className='contact-description'>
                        I love to connect - whether it's for work, collaboration, or just to say hi! 
                        Feel free to reach out through the form below or any of my social links.
                    </p>
                </div>

                <div className='contact-content'>
                    <div className='contact-form-wrapper'>
                        <form className='contact-form' onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <label htmlFor='name'>Name</label>
                                <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder='Your name'
                                    required
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='email'>Email</label>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder='your.email@example.com'
                                    required
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='message'>Message</label>
                                <textarea
                                    id='message'
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder='Tell me about your project or just say hello...'
                                    rows='6'
                                    required
                                ></textarea>
                            </div>

                            {formStatus.message && (
                                <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
                                    {formStatus.message}
                                </div>
                            )}

                            <button type='submit' className='submit-btn' disabled={formStatus.submitted}>
                                {formStatus.submitted ? (
                                    <>
                                        <span className='btn-icon'>✓</span>
                                        <span>Message Sent!</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <span className='btn-icon'>→</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    <div className='contact-info'>
                        <div className='contact-methods'>
                            {contactMethods.map((method, index) => (
                                <a
                                    key={index}
                                    href={method.href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='contact-method'
                                    style={{ '--method-color': method.color }}
                                >
                                    <div className='method-icon'>{method.icon}</div>
                                    <div className='method-content'>
                                        <div className='method-label'>{method.label}</div>
                                        <div className='method-value'>{method.value}</div>
                                    </div>
                                    <div className='method-arrow'>→</div>
                                </a>
                            ))}
                        </div>

                        <div className='contact-social'>
                            <p className='social-label'>Follow me on</p>
                            <div className='social-links'>
                                <a
                                    href='https://github.com/Shila-Mehta'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='social-link'
                                    aria-label='GitHub'
                                >
                                    <img src="/Images/github_11378534.png" alt="GitHub" />
                                    <span className='social-name'>GitHub</span>
                                </a>
                                <a
                                    href='https://www.linkedin.com/in/n-jabbar-1113aa374/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='social-link'
                                    aria-label='LinkedIn'
                                >
                                    <img src="/Images/linkedin_4782336.png" alt="LinkedIn" />
                                    <span className='social-name'>LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}