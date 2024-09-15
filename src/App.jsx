import { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './App.css';
import { AboutMe } from './components/AboutMe';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Service } from './components/Services';
import { Technologies } from './components/Technologies';
import { ToMe } from './components/ToMe';

function App() {
  const toMeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const technologiesRef = useRef(null);
  const serviceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const sections = [toMeRef, aboutMeRef, technologiesRef, serviceRef, projectsRef, contactRef];
  const [currentSection, setCurrentSection] = useState(0);
  const [showUpArrow, setShowUpArrow] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(true);

  const scrollToNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
      sections[currentSection + 1].current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      sections[currentSection - 1].current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionIndex = sections.findIndex((section) => section.current === entry.target);
          if (entry.isIntersecting) {
            setCurrentSection(sectionIndex);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      if (section.current) {
        observer.observe(section.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.current) {
          observer.unobserve(section.current);
        }
      });
    };
  }, [sections]);

  useEffect(() => {
    setShowUpArrow(currentSection > 0);
    setShowDownArrow(currentSection < sections.length - 1);
  }, [currentSection, sections]);

  return (
    <>
      <Navbar />

      <div ref={toMeRef}>
        <ToMe />
      </div>

      <div ref={aboutMeRef}>
        <AboutMe />
      </div>

      <div ref={technologiesRef}>
        <Technologies />
      </div>

      <div ref={serviceRef}>
        <Service />
      </div>

      <div ref={projectsRef}>
        <Projects />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer />

      {showUpArrow && (
        <div className="scroll-indicator up">
          <FaChevronUp className="up-arrow" onClick={scrollToPrevious} />
        </div>
      )}

      {showDownArrow && (
        <div className="scroll-indicator down">
          <FaChevronDown className="down-arrow" onClick={scrollToNext} />
        </div>
      )}
    </>
  );
}

export default App;
