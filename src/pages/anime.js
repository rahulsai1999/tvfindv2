import React, { Component } from 'react';
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
            </div>
        )
    }
}

export default Anime;