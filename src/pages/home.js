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
                <h1>Welcome Home</h1>
            </div>
        )
    }
}

export default Home;