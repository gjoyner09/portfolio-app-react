import React from 'react'
import './App.css';
import Home from './components/Home'
import About from './components/About'
import CV from './components/CV'
import Portfolio from './components/Portfolio'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <CV />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
