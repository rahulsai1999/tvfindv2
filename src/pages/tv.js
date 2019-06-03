import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
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
                <Button>Text Here</Button>
            </div>
        )
    }
}

export default TV;