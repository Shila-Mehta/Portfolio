import '../styles/footer.css';

export default function Footer(){
    return (
        <footer  className='footer'>
            <p>© {new Date().getFullYear()} Nimra Abdul Jabbar,All rights reserved .</p>
            <div className='footer-links'>
                <a href='https://github.com/Shila-Mehta' target='_blank'  rel="noopener noreferrer">GitHub</a>
                <a href='https://www.linkedin.com/in/n-jabbar-1113aa374/' target='_blank'  rel="noopener noreferrer">LinkedIn</a>
            </div>
        </footer>
    )
}