import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Navbar from '../components/navbar/navbar';

class Anime extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div>
                <Navbar/>
                Anime
                <Button>Text Here</Button>
            </div>
        )
    }
}

export default Anime;