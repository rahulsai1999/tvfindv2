import React, { Component } from 'react';
import './datacard.css'

class DataCard extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        const {data}=this.props;
        return (
            <div>
                <p>{data.title}</p>
            </div>
        )
    }
}

export default DataCard;