import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

    const [pokemon, setPokemon] = useState([]);
    
    const onClickHandler = () =>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response=> {
              setPokemon(response.data.results)
            })
            .catch(err => console.log(err))
    } 


  return (
    <div >
      <h1>Pokemon API</h1>
        <button onClick={onClickHandler}>Fetch Pokemon </button>
        <ul> 
          {pokemon.map((pokemon, i) => {
            return (<li key={i}>{pokemon.name}</li>)
          })}
        </ul>
    </div>
  );
}

export default App;
