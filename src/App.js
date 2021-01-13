import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Java from './components/Java/Java';
import Articles from './components/Articles/Articles';
import Introduction from './components/Introduction/Introduction';
import Navigation from './components/Navigation/Navigation';
import './App.css';
import Webdev from './components/Webdev/Webdev';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Introduction/>
        <Navigation/>
        <Java/>
        <Webdev/>
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
