import '../styles/hero.css';

export default function Hero() {
  return (
    <section className='hero' id='hero'>
      <div className='hero-content'>
        <h1>Hi, I’m Nimra</h1>
        <h2>Full-Stack MERN Developer</h2>
        <p>
          I build responsive, user-friendly web applications with clean code,
          solid design principles, and efficient backend solutions.
        </p>
        <a href='#projects' className='hero-btn'>View Projects</a>
      </div>
    </section>
  );
}
