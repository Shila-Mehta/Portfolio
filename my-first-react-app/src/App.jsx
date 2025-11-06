import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import About from './components/About';
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/education";

function App() {

  return (
   <div>
     <Navbar></Navbar>
     <Hero></Hero>
     {/* <About></About> */}
     <Skills></Skills>
     <Projects></Projects>
     <Education/>
     <Contact></Contact>
     <Footer></Footer>
     
     
   </div>
     
  )
}

export default App
