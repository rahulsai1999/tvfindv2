import React, { Component } from 'react';
import Navbar from '../components/navbar/navbar';

class Home extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div>
                <Navbar/>
                Welcome Home
            </div>
        )
    }
}

export default Home;