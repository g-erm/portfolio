import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
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
