import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
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
                <Button>Text Here</Button>
            </div>
        )
    }
}

export default Movie;