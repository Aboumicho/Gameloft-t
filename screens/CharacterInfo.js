import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';


 const CharacterInfo = ({navigation, colorBackground, route}) =>{
    const {character} = route.params
    const likedCharacters = useSelector((state) => state.likedCharactersReducer.likedCharacters)
    const dispatch = useDispatch();
    console.log("CHARACTERINFO > LIKED CHARACTERS ", likedCharacters)
    const findCharacterInList = likedCharacters.filter(likedCharacter => likedCharacter.key == character.name)
    const INITIAL_STATE_LIKE = findCharacterInList && findCharacterInList.length > 0 ? true : false;
    let [like, setLike] = useState(INITIAL_STATE_LIKE)
    
    let likeButtonName = "thumbs-up-outline"
    
    if( like){
         likeButtonName = "thumbs-up"
    }
    else{
         likeButtonName = "thumbs-up-outline"
    }

    return(
        <View style={{backgroundColor: "black", height: "100%", display: "flex", flexDirection:"column", justifyContent:"center"}}>
            <View style={{backgroundColor:"#101010", borderColor:"#282828", borderWidth:2}} >
                <View style={styles.titleLike}>
                <Text style={styles.inTextTitle}>{character.name} </Text> 
                <TouchableOpacity
                onPress={() => {
                    setLike(prevLike => {
                        const like = !prevLike
                        like ? dispatch({type: "LIKED", payload: character}) : dispatch({type: "UNLIKED", payload: character})
                        return  !prevLike
                    })
                }}
                >
                    <Ionicons name={likeButtonName} size={60} color="blue" />
                </TouchableOpacity>
                </View>
                
                <Text style={styles.inText}> <Ionicons name="man" size={22} /> {character.height} cm</Text>
                <Text style={styles.inText}> <Ionicons name="transgender" size={22} /> {character.gender}</Text>
                <Text style={styles.inText}> <Ionicons name="planet" size={22}/> {character.homeworld.name}</Text>
                <Text style={styles.inText}> <Ionicons name="body" size={22}/> {character.species && character.species.name ? character.species.name: null } </Text>
                <Text style={styles.inText}> <Ionicons name="barbell" size={22}/> {character.mass} kg </Text>
            </View>
        </View>
        )
}

const styles = StyleSheet.create({
    inTextTitle: {
        color:"#d9c615", fontSize: 32, fontWeight:"700",  textDecorationLine: 'underline', marginBottom: "5%", marginLeft: "5%"
    },
    inText: {
        color:"#d9c615", fontSize: 30, marginTop: 20, marginBottom: 20, marginLeft: "5%"
    },
    titleLike:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop: 20,
        marginRight: 30
    }
})

export default CharacterInfo