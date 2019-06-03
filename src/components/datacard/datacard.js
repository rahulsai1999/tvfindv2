import React, { Component } from 'react';
import './datacard.css'

class DataCard extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        const { data } = this.props;
        return (
            <div className="datacard">
                <div className="row">
                    <div className="col">
                        <img className="datacard-img" alt="poster" src={data.images.poster}></img>
                    </div>
                    <div className="col">
                        <div className="row"><h5>{data.title}</h5></div>
                        <div className="row"><h6>{data.year}</h6></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DataCard;

