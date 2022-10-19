import './App.css';
import AboutMe from './components/AboutMe/AboutMe.js'
import ContactMe from './components/ContactMe/ContactMe.js'
import DivAnimated from './components/DivAnimated/DivAnimated';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import Navbar from './components/Navbar/Navbar.js'
import Projects from './components/Projects/Projects.js';
import Technologies from './components/Technologies/Technologies.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <DivAnimated element={<AboutMe/>}></DivAnimated>
      {/* <AboutMe /> */}
      <DivAnimated element={<Projects/>}></DivAnimated>
      {/* <Projects /> */}
      <DivAnimated element={<Technologies/>}></DivAnimated>
      {/* <Technologies /> */}
      <DivAnimated element={<ContactMe/>}></DivAnimated>
      {/* <ContactMe /> */}
      <Footer />
    </div>
  );
}

export default App;
