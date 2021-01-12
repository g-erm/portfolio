import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './components/Projects/Projects';
import Articles from './components/Articles/Articles';
import About from './components/About/About';
import Navigation from './components/Navigation/Navigation';
import './App.css';
import { motion } from 'framer-motion';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <About/>
        <Navigation/>

        {/* Router setup*/}
        <Route path="/projects" component={Projects} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={Projects} />

      </div>
    </BrowserRouter>
  );
}

export default App;
