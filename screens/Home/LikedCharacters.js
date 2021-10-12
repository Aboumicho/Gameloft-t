import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Character } from '../../components/Character';

export default function LikedCharacters({navigation}) {
    const likedCharacters = useSelector((state) => state.likedCharactersReducer.likedCharacters)
    const dispatch = useDispatch();
    // console.log("LikedCharacters > likedCharacters >", likedCharacters)
    let colorToggle=false
    let characters = likedCharacters.slice().sort((a,b) =>  a.character.name > b.character.name && 1 || -1 )
    return (
    <ScrollView style={styles.container} >
        <View>
            
        </View>
        {characters.map(likedCharacter => {
            colorToggle = !colorToggle
            let colorBackground = colorToggle ? "#312d05" : "#5a5737"    
            return <Character navigation={navigation} character={likedCharacter.character} colorBackground={colorBackground} />
        })}
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black"
  },
});
