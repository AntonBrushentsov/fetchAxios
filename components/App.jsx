import React, { Component } from 'react';

import List from './List.jsx';
import Axios from "axios";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: []
        };

        console.log('constructor');
    }

    componentDidMount() {
        console.log('/list/count=3');
        const getList = query => Axios.get('/list', {params: query})
            .then(res => this.setState({ list: res }))
    }

    render() {
        console.log('state', this.state);

        const { list } = this.state;

        return (
            <div>
                <List list={list}  />
            </div>
        );
    }
}

export default App;
