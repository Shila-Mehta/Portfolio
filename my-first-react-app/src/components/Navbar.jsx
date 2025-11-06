import '../styles/navbar.css';
import { useEffect, useState } from 'react';

export default function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState('home');

    useEffect(() => {
        const sectionIds = ['home','about','skills','projects','education','experience','contact'];
        const onScroll = () => {
            let current = 'home';
            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (!el) continue;
                const rect = el.getBoundingClientRect();
                if (rect.top <= 120 && rect.bottom >= 120) {
                    current = id;
                    break;
                }
            }
            setActive(current);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleNavClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className='navbar' role="navigation" aria-label="Main Navigation">
            <div className='navbar-left'>
                <div className='navbar-logo'>
                    <a href="#home" aria-label="Go to home">Nimra</a>
                </div>
                <button
                    className={`menu-toggle${menuOpen ? ' open' : ''}`}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span/>
                    <span/>
                    <span/>
                </button>
            </div>

            <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
                <li><a className={active==='home'?'active':''} href='#home' onClick={handleNavClick}>Home</a></li>
                <li><a className={active==='about'?'active':''} href='#about' onClick={handleNavClick}>About</a></li>
                <li><a className={active==='skills'?'active':''} href='#skills' onClick={handleNavClick}>Skills</a></li>
                <li><a className={active==='projects'?'active':''} href='#projects' onClick={handleNavClick}>Projects</a></li>
                <li><a className={active==='education'?'active':''} href='#education' onClick={handleNavClick}>Education</a></li>
                <li><a className={active==='experience'?'active':''} href='#experience' onClick={handleNavClick}>Experience</a></li>
                <li><a className={active==='contact'?'active':''} href='#contact' onClick={handleNavClick}>Contact</a></li>
            </ul>

            <div className='navbar-actions'>
                <a className='social' href='https://github.com/Shila-Mehta' target='_blank' rel='noreferrer' aria-label='GitHub'>
                    <img src="/Images/github_11378534.png" alt="GitHub" />
                </a>
                <a className='social' href='https://www.linkedin.com/in/n-jabbar-1113aa374/' target='_blank' rel='noreferrer' aria-label='LinkedIn'>
                    <img src="/Images/linkedin_4782336.png" alt="LinkedIn" />
                </a>
                <a className='resume-btn' href='#contact'>Hire Me</a>
            </div>
        </nav>
    )
}