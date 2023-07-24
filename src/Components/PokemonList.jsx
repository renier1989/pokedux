import Layout from "./Layout";
import PokemonCard from "./PokemonCard";

function PokemonList({pokemons}) {
    // console.log(pokemons);
  return (
    <Layout>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 items-center justify-center">
        {pokemons.map((pokemon, index) => {
            return <PokemonCard pokemon={pokemon} key={pokemon.id} />;
        })}
    </div>

    </Layout>
  )
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill(''),
}

export default PokemonList