import "./App.css";
import PokemonList from "./Components/PokemonList";
import Searcher from "./Components/Searcher";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ReactComponent as LoadingSVG } from "../public/loading.svg";
import { fetchPokemonsWithDetails } from "./Slices/dataSlice";

function App() {
  // function App({ pokemons, setPokemons }) {
  // console.log("🚀 ~ file: App.jsx:10 ~ App ~ pokemons:", pokemons);

  // const pokemons = useSelector((state) => state.data.pokemons , shallowEqual);
  // const pokemonsFiltered = useSelector((state) => state.data.pokemonsFiltered , shallowEqual);
  const pokemonsToShow = useSelector((state) => {
    return state.data.search ? state.data.pokemonsFiltered : state.data.pokemons;
  },shallowEqual)

  // const pokemonsToShow = pokemonsFiltered.length > 0 ? pokemonsFiltered : pokemons;

  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();

  // const [pokemons ,setPokemons ]  = useState([]);

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
    // crate an Async function to fetch Pokemon from the api
    // const fetchPokemons = async () => {
    //   dispatch(setLoading(true));
    //   const pokemonsRes = await getPokemo();
    //   dispatch(getPokemonsWithDetails(pokemonsRes));
    //   dispatch(setLoading(false));
    // };

    // fetchPokemons();
  }, []);

  return (
    <>
      <div className=" h-screen overflow-y-scroll sm:px-32 px-6">
        
        <div className="w-full h-40">
          <div className="w-full h-full rounded-sm bg-no-repeat bg-center bg-logo"></div>
          {/* <div className="w-[50%] h-[20vh] bg-logo bg-cover bg-no-repeat flex items-center  justify-center"></div> */}
          {/* <img className="bg-cover object-cover" src="../logo.png" alt="" /> */}
        </div>
        <Searcher />
        {loading ? (
          <div className="flex items-center justify-center">
            <LoadingSVG />
          </div>
        ) : (
          <PokemonList pokemons={pokemonsToShow}  />
        )}

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
