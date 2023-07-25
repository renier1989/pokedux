import { useDispatch } from "react-redux";
import { StartButton } from "./StartButton";
import { setFavorite } from "../Slices/dataSlice";
// import { setFavorite } from "../actions";


function PokemonCard({pokemon}) {
  const dispatch = useDispatch();

  const handleFavorite = ()=>{
    dispatch(setFavorite({pokemonId :pokemon.id}))
  }

  return (
    <>
      <div className="container px-5 py-12 mx-auto ">
        <div className="flex flex-wrap w-full items-center justify-center">
          <div className="p-4">
            <div className="h-full  border-2 border-gray-800 rounded-lg overflow-hidden  bg-cover bg-white bg-opacity-70">
              {/* <img
                src="https://dummyimage.com/720x400"
                alt=""
                className="lg:h-48 md:h-36 w-full object-cover object-center"
              /> */}
              <img className="lg:h-48 md:h-36 w-full object-cover object-center" 
              src={pokemon.sprites.front_default} 
              alt={pokemon.name} />
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-slate-600 mb-3 flex">
                  {pokemon.name} <span className="text-gray-500 flex items-end justify-end leading-none text-sm px-3 py-1 ">
                    <StartButton isFavorite={pokemon.favorite} onClick={handleFavorite} />
                  </span>
                </h1>
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-3 flex gap-2">
                  {pokemon.types.map((type, index) => (
                    <p key={index}>{type.type.name}</p>
                  ))}
                </h2>
                {/* <p className="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p> */}
                {/* <div className="flex items-end justify-end">
                  <span className="text-gray-500 flex items-end justify-end leading-none text-sm px-3 py-1 ">
                    <StartButton />
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PokemonCard;
