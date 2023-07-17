import getPokemo from "./Api";
import "./App.css";
import PokemonList from "./Components/PokemonList";
import Searcher from "./Components/Searcher";
import {useEffect, useState } from 'react';

function App() {

  const [pokemons ,setPokemons ]  = useState([]);

  useEffect(()=>{
    // crate an Async function to fetch Pokemon from the api
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemo();
      setPokemons(pokemonsRes);
    }
    
    fetchPokemons();
  }, [])

  return (
    <>
      <Searcher />
      <PokemonList pokemons={pokemons} />
      {/* <PokemonCard /> */}
    </>
  );
}

export default App;
