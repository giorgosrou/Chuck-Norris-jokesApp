import React from 'react';
import './App.css';
import ChuckNorrisJokes from '../components/ChuckNorrisJokes';
import NewJokeButton from '../components/NewJokeButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chuck Norris Joke:</h1>
        <ChuckNorrisJokes />
      </header>
    </div>
  );
}

export default App;







