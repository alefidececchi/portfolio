import './App.css';
import AboutMe from './components/AboutMe/AboutMe.js';
import ContactMe from './components/ContactMe/ContactMe.js';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import Navbar from './components/Navbar/Navbar.js';
import Projects from './components/Projects/Projects.js';
import Technologies from './components/Technologies/Technologies.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutMe/>
      <Projects />
      <Technologies/>
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
