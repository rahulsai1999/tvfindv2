import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';

//pages
import Home from './pages/home';
import Anime from './pages/anime';
import Tv from './pages/tv';
import Movie from './pages/movie';

function App() {
  return (
    <Router>
    <div className="App">
        <p>
          <Route path="/" exact component={Home}></Route>
          <Route path="/anime" component={Anime}></Route>
          <Route path="/tv" component={Tv}></Route>
          <Route path="/movie" component={Movie}></Route>
        </p>
    </div>
    </Router>
  );
}

export default App;
