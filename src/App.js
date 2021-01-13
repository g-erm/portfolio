import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './components/Projects/Projects';
import Articles from './components/Articles/Articles';
import About from './components/About/About';
import Navigation from './components/Navigation/Navigation';
import './App.css';
import Java from './components/Java/Java';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <About/>
        <Navigation/>
        <Java/>
        <Articles/>
        <Projects/>

        {/* Router setup
        <Route path="/projects" component={Projects} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={Projects} /> */}

        <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

      </div>
    </BrowserRouter>
  );
}

export default App;
