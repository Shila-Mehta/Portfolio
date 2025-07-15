import '../styles/contact.css';

export default  function Contact(){
    return (

        <section className='contact'  id='contact'>
            <h2>Contact Me</h2>
            <p> I love to connect - whether its for work ,collaboration or just to say hi</p>
            <ul  className='contact-links'>
                <li><a href='https://mail.google.com/mail/u/0/?pli=1#inbox' target='_blank' rel="noopener noreferrer">Email</a></li>
                <li><a href='https://github.com/' target='_blank' rel="noopener noreferrer">GitHub</a></li>
                <li><a href='https://www.linkedin.com/feed/' target='_blank' rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
        </section>

    )
}