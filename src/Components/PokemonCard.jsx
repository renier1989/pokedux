import {StarIcon} from '@heroicons/react/24/outline';

function PokemonCard({pokemon}) {
  return (
    <>
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4">
            <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
              {/* <img
                src="https://dummyimage.com/720x400"
                alt=""
                className="lg:h-48 md:h-36 w-full object-cover object-center"
              /> */}
              <img className="lg:h-48 md:h-36 w-full object-cover object-center" 
              
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" 
              alt="" />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                  {pokemon.name}
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  The Catalyzer
                </h1>
                <p className="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div className="flex  justify-between ">
                  <a className="text-green-400 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <span className="text-gray-500 flex items-end justify-end leading-none text-sm px-3 py-1 ">
                    <StarIcon className="h-6 w-6 text-blue-500 cursor-pointer"/>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PokemonCard;
