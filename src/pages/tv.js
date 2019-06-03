import React, { Component } from 'react';
import Navbar from '../components/navbar/navbar';
import SearchBar from '../components/searchbar/searchbar';

class TV extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div>
                <Navbar/>
                <h1>TV</h1>
                <SearchBar/>
            </div>
        )
    }
}

export default TV;