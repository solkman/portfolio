import Nav from './components/Nav'
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";
import Skills from "./components/Skills.tsx";
import Contact from "./components/Contact.tsx";

function App() {
    return (
        <>
            <Nav />
            <Hero/>
            <About/>
            <Projects/>
            <Skills/>
            <Contact/>

        </>
    )
}

export default App