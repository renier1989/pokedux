import Layout from "./Layout";
import PokemonCard from "./PokemonCard";

function PokemonList({pokemons}) {
    // console.log(pokemons);
  return (
    <Layout>
    <div className={` ${pokemons.length > 0 ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 items-center justify-center':'flex items-center justify-center' }`}>
        {
          pokemons.length ? (
            pokemons.map((pokemon, index) => {
                return  <PokemonCard pokemon={pokemon} key={pokemon.id} />;
            }) 
          ):(
            <div className="w-full h-40 items-center justify-center mx-auto">
              <p className="text-lg font-semibold text-gray-500">Sorry we could't catch any pokemon</p>
              <div className="w-full h-full rounded-sm  bg-cover bg-center bg-not-found"></div>
              {/* <img className="w-60 h-full" src="../notfound.png" alt="" /> */}
            </div>
            
          )
        }
    </div>

    </Layout>
  )
}


export default PokemonList