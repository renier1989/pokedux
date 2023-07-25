export const logger = (store) => (next) => (action) => {
    console.log("🚀 Middleware Logger:", action);
    next(action);
}

// THIS FUNCTION IS TO ADD A NEW CUSTOM POKEMON,
export const featuring = (store) => (next) => (actionInfo) => {
    const featured = [{name: 'ColosSus'}, ...actionInfo.action.payload]; //HERE I ADD A NEW CUSTOM POKEMON NAMED COLOSSUS
    //HERE I MODIFIED THE ACTION FIRST I TAKE ALL WHAT THE ACTIONINFO CONTAINS AND CHANGE ITS ANCTION , TAKING ALL WHAT THE ACTIONINFO.ACTION CONTAINS AND CHANGE THE PAYLOAD WHO WILL BE THE NEW POKEMONS LIST
    const updatedActionInfo = {...actionInfo, action: {...actionInfo.action , payload: featured} } 
    next(updatedActionInfo);

}