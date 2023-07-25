import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPokemo, getPokemonDetails } from '../Api';
import { setLoading } from './uiSlice';

const initialState = {
    pokemons: [],
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
    }
  }
});
console.log("🚀 ~ file: dataSlice.js:42 ~ dataSlice:", dataSlice)

export const {setFavorite, setPokemons} = dataSlice.actions

export default dataSlice.reducer