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

  const pokemons = useSelector((state) => state.data.pokemons , shallowEqual);
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
        
        <div className="flex items-center justify-center">
          {/* <div className="w-[50%] h-[20vh] bg-logo bg-cover bg-no-repeat flex items-center  justify-center"></div> */}
          <img className="bg-cover object-cover" src="../public/logo.png" alt="" />
        </div>
        <Searcher />
        {loading ? (
          <div className="flex items-center justify-center">
            <LoadingSVG />
          </div>
        ) : (
          <PokemonList pokemons={pokemons} />
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
