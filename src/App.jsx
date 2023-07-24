import {getPokemo, getPokemonDetails, } from "./Api";
import "./App.css";
import PokemonList from "./Components/PokemonList";
import Searcher from "./Components/Searcher";
import { getPokemonsWithDetails, setPokemons } from "./actions";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
// function App({ pokemons, setPokemons }) {
  // console.log("🚀 ~ file: App.jsx:10 ~ App ~ pokemons:", pokemons);

  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  // const [pokemons ,setPokemons ]  = useState([]);

  useEffect(() => {
    // crate an Async function to fetch Pokemon from the api
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemo();
      // const pokemonsDetailed = await Promise.all(pokemonsRes.map(pokemon => getPokemonDetails(pokemon)));
      // dispatch(setPokemons(pokemonsRes));
      dispatch(getPokemonsWithDetails(pokemonsRes));
    };

    fetchPokemons();
  }, []);

  return (
    <>
    <div className=" h-screen overflow-y-scroll sm:px-32 px-6">
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

// const mapStateToProps = (state) => ({
//   pokemons: state.pokemons,
// });

// const mapDispatchToProps = (dispatch) => ({
//   setPokemons: (value) => dispatch(setPokemonsActions(value)),
// });

export default App;
// export default connect(mapStateToProps, mapDispatchToProps)(App);
