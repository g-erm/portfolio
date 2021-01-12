import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './components/Projects/Projects';
import Articles from './components/Articles/Articles';
import About from './components/About/About';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Portfolio Page</h1>

        {/* Navigation */}
        <div className="navigation">
          <div className="navigation-sub">

            <Link to="/projects" className="item">Projects</Link>
            <Link to="/articles" className="item">Articles</Link>
            <Link to="/about" className="item">About</Link>

          </div>
        </div>

        {/* Router setup*/}
        <Route path="/projects" component={Projects} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />

      </div>
    </BrowserRouter>
  );
}

export default App;
