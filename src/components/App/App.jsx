import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import About from '../About/About';


function App() {

  return(
    <Router>
      <div>
        <Header />
        <Nav />
        <Switch>
          <Redirect exact from="/" to="/home" />

          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;