import getPokemo from "./Api";
import "./App.css";
import PokemonList from "./Components/PokemonList";
import Searcher from "./Components/Searcher";
import { setPokemons as setPokemonsActions } from "./actions";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

function App({ pokemons, setPokemons }) {
  console.log("🚀 ~ file: App.jsx:10 ~ App ~ pokemons:", pokemons);

  // const [pokemons ,setPokemons ]  = useState([]);

  useEffect(() => {
    // crate an Async function to fetch Pokemon from the api
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemo();
      setPokemons(pokemonsRes);
    };

    fetchPokemons();
  }, []);

  return (
    <>
    <div className="w-full h-screen overflow-y-scroll">
      <div className="flex items-center justify-center">
        <img className="object-cover" src="../public/logo.png" alt="" />
      </div>
      <Searcher />
      <PokemonList pokemons={pokemons} />
      {/* <PokemonCard /> */}
    </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
