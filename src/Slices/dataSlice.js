import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPokemo, getPokemonDetails } from '../Api';
import { setLoading } from './uiSlice';
import { useDispatch } from 'react-redux';

const initialState = {
    pokemons: [],
    pokemonsFiltered: [],
    search: '',
}


export const fetchPokemonsWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (_, {dispatch}) => {
        // loading
        //fetch
        // loading
        dispatch(setLoading(true));
        const pokemonsRes = await getPokemo();
        const pokemonsDetailed = await Promise.all(
            pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
            );
            dispatch(setPokemons(pokemonsDetailed));
            dispatch(setLoading(false));
    }
);

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
        state.pokemons = action.payload;
    },
    setFavorite: (state,action) => {
            const currentPokemonIndex = state.pokemons.findIndex((pokemon)=>{
                return pokemon.id === action.payload.pokemonId
            });

            if(currentPokemonIndex >= 0){
                const isFavorite = state.pokemons[currentPokemonIndex].favorite;
                state.pokemons[currentPokemonIndex].favorite = !isFavorite;

            }
    },
    setSearchPokemons:(state, action) => {

        const query_search = action.payload.toLowerCase();
        state.search = query_search;
        // console.log("🚀 ~ file: dataSlice.js:51 ~  state.search:",  state.search)
        if(query_search.length > 0){
            const pokemonsFound = state.pokemons.filter((poke) => {
                return poke.name.includes(query_search);
            });
            state.pokemonsFiltered = pokemonsFound;
            // console.log("🚀 ~ file: dataSlice.js:55 ~ state.pokemonsFiltered:", state.pokemonsFiltered)
        }else{
            state.pokemonsFiltered = [];
        }



    }
  }
});
console.log("🚀 ~ file: dataSlice.js:42 ~ dataSlice:", dataSlice)

export const {setFavorite, setPokemons,setSearchPokemons} = dataSlice.actions

export default dataSlice.reducer