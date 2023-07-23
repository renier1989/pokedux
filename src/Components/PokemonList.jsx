import PokemonCard from "./PokemonCard";

function PokemonList({pokemons}) {
    // console.log(pokemons);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {pokemons.map((pokemon, index) => {
            return <PokemonCard pokemon={pokemon} key={index}/>;
        })}
    </div>
  )
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill(''),
}

export default PokemonList