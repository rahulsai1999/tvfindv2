import React, { Component } from 'react';
import './navbar.css'
import { MdLiveTv, MdLocalMovies, MdHome, MdTranslate } from 'react-icons/md'

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="nav-logo">
                </div>
                <div className="nav-elements">
                    <a className="btn btn-primary" href="/">Home <MdHome /></a>
                    <a className="btn btn-primary" href="/movie">Movie <MdLocalMovies /></a>
                    <a className="btn btn-primary" href="/tv">TV Series <MdLiveTv /></a>
                    <a className="btn btn-primary" href="/anime">Anime <MdTranslate /></a>
                </div>
            </div>
        )
    }
}

export default Navbar;