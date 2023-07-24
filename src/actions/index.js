import { getPokemonDetails } from '../Api';
import { SET_POKEMONS } from './types'

export const setPokemons = (payload) => ({
    type : SET_POKEMONS,
    payload,
});

//THIS IS AN SPECIAL ACTION CREATOR USING REDUX-THUNK
export const getPokemonsWithDetails = 
    (pokemons = []) => 
    async (dispatch) => {
        const pokemonsDetailed = await Promise.all(pokemons.map(pokemon => getPokemonDetails(pokemon)));
        dispatch(setPokemons(pokemonsDetailed));
    } 

