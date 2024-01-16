import Landing from "./components/landing/Landing";
import AboutMe from "./components/About me/AboutMe";
import Studies from "./components/Studies/Studies";
import Techs from "./components/Techs/Techs";
import Contact from "./components/Contact/Contact";
import NavBar from "./components/navBar/NavBar";
import Projects from "./components/Projects/Projects";


function App() {

  return (
    <>
    <NavBar/>

    <section id="landingPage">
    <Landing/>
    </section>

    <section id="aboutMe">
    <AboutMe/>
    </section>

    <section id="studies">
    <Studies/>
    </section>

    <section id="techs">
    <Techs/>
    </section>

    <section id="projects">
    <Projects/>
    </section>

    <section id="contact">
    <Contact/>
    </section>
    
    <footer>Desarrollado por Facundo Cataldo -2024-</footer>
    </>
  )
}

export default App
