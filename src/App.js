import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './components/Projects/Projects';
import Articles from './components/Articles/Articles';
import About from './components/About/About';
import './App.css';
import { motion } from 'framer-motion';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <motion.h1
          initial={{ y: -250, opacity: 0 }}
          animate={{ y: -10, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.75 }}>
          <div><img src="assets/squarepic.jpg" alt="Profile Picture"/></div>
          Portfolio Page
        </motion.h1>

        {/* Navigation */}
        <motion.div 
          className="navigation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.0 }}>

          <div className="navigation-sub">

            <Link to="/projects" className="item">Projects</Link>
            <Link to="/articles" className="item">Articles</Link>
            <Link to="/about" className="item">About</Link>

          </div>
        </motion.div>

        {/* Router setup*/}
        <Route path="/projects" component={Projects} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />

      </div>
    </BrowserRouter>
  );
}

export default App;
