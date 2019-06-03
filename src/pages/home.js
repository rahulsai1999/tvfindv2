import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
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
                <Button>Text Here</Button>
            </div>
        )
    }
}

export default Home;