import './App.scss';
import { AboutMe } from './components/AboutMe';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/Footer';
import { Technologies } from './components/Technologies';
import { ToMe } from './components/toMe/ToMe';
import { Parallax } from './components/parallax/Parallax';
import { Service } from './components/services/Services';
import { Projects } from './components/projects/Projects';
import { Contact } from './components/contact/Contact';
import { Cursor } from './components/cursor/Cursor';

function App() {
  return (
    <div>
      <Cursor />
      <section
        id='home'
      >
        <Navbar />
        <ToMe />
      </section>
      <section id="about-me">
        <Parallax type="about-me" />
      </section>
      <section>
        <AboutMe />
      </section>
      <section id="projects">
        <Parallax type="projects" />
      </section>
      <Projects />
      <section id="services">
        <Parallax type="services" />
      </section>
      <section>
        <Service />
      </section>
      <section id="technologies">
        <Parallax type="technologies" />
      </section>
      <section>
        <Technologies />
      </section>
      <section>
        <Contact />
        <Footer />
      </section>
    </div >
  );
}

export default App;
