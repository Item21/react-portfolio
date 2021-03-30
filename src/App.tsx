import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import Navigation from './Components/Navigation';
import Home from './Views/Home';
import About from './Views/About';
import Projects from './Views/Projects';

function App() {
  return (
    <div className="App">
      <Navigation />

      <main className="content">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
