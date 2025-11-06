import '../styles/footer.css';

export default function Footer(){
    const currentYear = new Date().getFullYear();
    
    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/Shila-Mehta',
            icon: '/Images/github_11378534.png',
            ariaLabel: 'Visit my GitHub profile'
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/n-jabbar-1113aa374/',
            icon: '/Images/linkedin_4782336.png',
            ariaLabel: 'Visit my LinkedIn profile'
        },
        {
            name: 'Email',
            url: 'mailto:nimraabduljabbar14@gmail.com',
            icon: '📧',
            ariaLabel: 'Send me an email'
        }
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className='footer' role="contentinfo">
            <div className='footer-container'>
                <div className='footer-content'>
                    <div className='footer-info'>
                        <p className='footer-copyright'>
                            © {currentYear} <span className='footer-name'>Nimra Abdul Jabbar</span>. All rights reserved.
                        </p>
                        <p className='footer-tagline'>
                            Built with React & Vite
                        </p>
                    </div>

                    <div className='footer-links'>
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target={link.url.startsWith('mailto:') ? undefined : '_blank'}
                                rel={link.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                                className='footer-link'
                                aria-label={link.ariaLabel}
                            >
                                {link.icon.startsWith('/') ? (
                                    <img src={link.icon} alt={link.name} className='footer-icon' />
                                ) : (
                                    <span className='footer-icon-emoji'>{link.icon}</span>
                                )}
                                <span className='footer-link-text'>{link.name}</span>
                            </a>
                        ))}
                    </div>
                </div>

                <button 
                    className='footer-back-to-top' 
                    onClick={scrollToTop}
                    aria-label='Scroll to top'
                >
                    <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                    >
                        <path d="M18 15l-6-6-6 6"/>
                    </svg>
                </button>
            </div>
        </footer>
    )
}