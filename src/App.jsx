
import { AboutMe } from './components/AboutMe'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Service } from './components/Services'
import { Technologies } from './components/Technologies'
import { ToMe } from './components/ToMe'

function App() {

  return (
    <>
      <Navbar />
      <ToMe />
      <AboutMe />
      <Technologies />
      <Service />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
export default App
