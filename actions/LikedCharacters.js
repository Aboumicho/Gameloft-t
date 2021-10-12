
export const addLikedCharacter = (character) => {
    console.log("ACTION : LIKED" )
    return(dispatch)=>{dispatch({type: "LIKED", payload: character})}
}

export const deleteLikedCharacter = (character) =>{
    console.log("ACTION : UNLIKED" )
    return(dispatch)=>{dispatch({type: "UNLIKED" , payload: character})}
    
}

export const loadInitialLikedCharacters = () =>{
    return {type: "INITIAL_LOAD"}
}