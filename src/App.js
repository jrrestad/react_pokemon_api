import React, { useState } from 'react';

import './App.css';

function App() {

  const [pokemon, setPokemon] = useState([]);

  const getPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(response => response.json())
    .then(response => setPokemon(response.results))
    .catch(err => {console.error(err)}) 
  }

  return (
    <div className="container">
      <button className="btn btn-secondary mt-5 form-control" onClick={getPokemon}>Fetch Pokemon</button>
      {/* <ul>{pokemon}</ul> */}
      <ol>
          {
            pokemon.length > 0 && pokemon.map( (pokemon, i) => {
              return (
                <li key={i}>{pokemon.name}</li>
              )
            })
          }
      </ol>
    </div>
  );
}

export default App;
