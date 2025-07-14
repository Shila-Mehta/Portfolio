import '../styles/hero.css';


export default function Hero(){
    return (
      <section  className='hero'  id='hero'>
        <div className='hero-content'>
            <h1>Hi, I am  Nimra</h1>
            <h2>Frontend React Developer</h2>
            <p>I build  responsive ,user-friendly web interfaces with clean code and solid design principles.</p>
            <a  href='#projects'  className='hero-btn'>View Projects</a>
        </div>
      </section>
    )
}