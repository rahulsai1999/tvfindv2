import React, { Component } from 'react';
import './navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div>
                <a href="/">Home</a>
                <a href="/anime">Anime</a>
                <a href="/movie">Movie</a>
                <a href="/tv">TV Series</a>
            </div>
        )
    }
}

export default Navbar;