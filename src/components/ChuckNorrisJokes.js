import React, { Component } from 'react';
import NewJokeButton from './NewJokeButton';

class ChuckNorrisJokes extends Component {
    constructor() {
        super();
        this.state = {joke:''};
    }

    componentDidMount() {
        fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then((resp) => {
        this.setState({ joke: resp.value });
        })
    }

    fetchNewJoke = () => {
        fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then((resp) => {
        this.setState({ joke: resp.value });
        })
    }

    render () {
        return (
            <div>
                <p>{this.state.joke}</p>
                <NewJokeButton clickChange = {this.fetchNewJoke} />
            </div>

        )
    }
}

export default ChuckNorrisJokes;