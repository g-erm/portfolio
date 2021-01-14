import React from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter } from 'react-router-dom';
import Introduction from './components/Introduction/Introduction';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Java from './components/Java/Java';
import Webdev from './components/Webdev/Webdev';
import Appdev from './components/Appdev/Appdev';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <motion.h1 
          className="page-title"
          initial={{ y: -250, opacity: 0 }}
          animate={{ y: -10, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.75 }}>
          g-erm
        </motion.h1>
        <Introduction/>
        <Navigation/>
        <About/>
        <Java/>
        <Webdev/>
        <Appdev/>
        <Contact/>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
