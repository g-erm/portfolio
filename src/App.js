import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Introduction from './components/Introduction/Introduction';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Java from './components/Java/Java';
import Webdev from './components/Webdev/Webdev';
import Appdev from './components/Appdev/Appdev';
import Articles from './components/Articles/Articles';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Introduction/>
        <Navigation/>
        <About/>
        <Java/>
        <Webdev/>
        <Appdev/>
        <Articles/>

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
