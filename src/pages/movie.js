import React, { Component } from 'react';
import Navbar from '../components/navbar/navbar';
import SearchBar from '../components/searchbar/searchbar';
import DataCard from '../components/datacard/datacard';
import { Spinner } from 'react-bootstrap';
import Axios from 'axios';

class Movie extends Component {
    constructor() {
        super();
        this.state = { data: {}, loading: true }
    }

    componentDidMount() {
        Axios.get('https://tv-v2.api-fetch.website/movies/1').then((response) => {
            this.setState({ data: response.data, loading: false });
            console.log(response.data)
        }
        ).catch((err) => {
            console.log(err);
        })
    }

    isLoadingorComponent = () => {
        if (this.state.loading) 
        { return (<Spinner animation="border" variant="success" />) }
        else {
            const { data } = this.state;
            return (
                <div>
                    {data.map((item)=>{
                        return <DataCard data={item}/>
                    })}
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <h1>Movie</h1>
                <SearchBar />
                <div className="container">
                    {this.isLoadingorComponent()}
                </div>
            </div>
        )
    }
}

export default Movie;