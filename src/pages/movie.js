import React, { Component } from 'react';
import Navbar from '../components/navbar/navbar';

class Movie extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div>
                <Navbar/>
                Movie
            </div>
        )
    }
}

export default Movie;