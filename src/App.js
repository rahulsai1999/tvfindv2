import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';

//pages
import Home from './pages/home';
import Anime from './pages/anime';
import Tv from './pages/tv';
import Movie from './pages/movie';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home}></Route>
        <Route path="/anime" component={Anime}></Route>
        <Route path="/tv" component={Tv}></Route>
        <Route path="/movie" component={Movie}></Route>
      </Router>
    </div>

  );
}

export default App;
