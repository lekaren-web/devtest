import logo from './logo.svg';
import './App.css';

import React, {Component} from 'react';

class ExampleClass extends Components(){
    constructor(props) {
    super(props);
    this.state = {
    unitId: null,
    description: "",
    inside: false,
    floor: 0,
    width: 0,
    length: 0,
    area: 0,
    rate: 0
    };
    this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount(){
        this.fetchData(this.state.unitId)
    }

// <!-- create fetchData function, can either use fetch or axios -->
   fetchData = () => {
        try {

// <!-- await fetch("https://fe-test.marketing4storage.com/cart/reserve/528560dc-0507-4db9-94f9-f1afa80d0e07"); -->

    axios.get('https://fe-test.marketing4storage.com/cart/reserve/528560dc-0507-4db9-94f9-f1afa80d0e07')
        .then(response => {
        this.setState(unitId: response.data.id);
        this.setState(description: response.data.description);
        this.setState(inside: response.data.inside);
        this.setState(floor: response.data.floor);
        this.setState(width: response.data.width);
        this.setState(length: response.data.length);
        this.setState(area: response.data.area);
        this.setState(rate: response.data.rate);
        }
        );
        

    } catch (error) {
        console.error(error);
        return error;
    }

    };


    render(){
        return (
// <!-- Upon success the backend will respond with HTTP 200 and include the details -->
// <!-- You will want to display that information on subsequent pages so the visitor can see what they are reserving. The width and length are in feet and the price is USD per month for the rental. -->

// <!-- display code will look something like -->
            <div>
            
            </div>
        )
    }
}

export default ExampleClass

