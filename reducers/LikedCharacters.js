
const INITIAL_STATE = {
    likedCharacters: []
}

const LikedCharacters = (state=INITIAL_STATE, action) =>{
    console.log("REDUCER ", action)
    switch(action.type){
        case "LIKED":
            console.log("LIKED CHARACTER: ", action.payload)
            state.likedCharacters = state.likedCharacters.filter(likedCharacter => likedCharacter.key != action.payload.name)
            state.likedCharacters = state.likedCharacters.concat({key: action.payload.name, character: action.payload })
            return  {
                ...state,
            };
        case "UNLIKED":
            state.likedCharacters = state.likedCharacters.filter(likedCharacter => likedCharacter.key != action.payload.name)
            return {...state}
        
        case "LOAD_INITIAL":
            return {...state}
        default:
            return state


    }
}

export default LikedCharacters