import React, { Component } from 'react';
import Navbar from '../components/navbar/navbar';

class TV extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div>
                <Navbar/>
                TV
            </div>
        )
    }
}

export default TV;