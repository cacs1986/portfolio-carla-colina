import React from 'react';
import About from './pages/About';
import Projects from './pages/Projects';
import Contents from './pages/Contents';
import Contact from './pages/Contact';
import Nav from './components/Nav'; 
import Footer from './components/Footer'; 

const App = () => {
  return (
    <div>
      <Nav />
      <About />
      <Projects />
      <Contents/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
