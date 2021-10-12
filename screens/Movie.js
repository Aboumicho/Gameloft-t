import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Character } from '../components/Character';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';

export default function Movie({navigation, route}) {

    const {episode} = route.params
    // console.log("EPISODE ", episode)
    // console.log("COLOR ", color)
    // console.log("textcolor ", textColor)
    // console.log("episode.openingCrawl", episode.openingCrawl)
    let colorToggle=false
    let characters = episode.characterConnection.characters.slice().sort((a,b) =>  a.name > b.name && 1 || -1 )
    const likedCharacters = useSelector((state) => state.likedCharactersReducer.likedCharacters)
    const dispatch = useDispatch();

    return (
        <ScrollView style={{width:"100%", backgroundColor:"black"}} key={episode.episodeID}>   
            <Text style={{color: "#f5f500",fontSize: 38, marginLeft: "5%", fontWeight:"700", marginTop:"5%", textDecorationLine: 'underline', marginBottom: "3%" }}>{episode.title}</Text>
            <Text style={styles.inText}>{episode.openingCrawl.replace(/\n/g, '')}</Text>
            <Text style={styles.inTextTitle}>Release Date</Text>
            <Text style={styles.inText}>{episode.releaseDate}</Text>
           
            <Text style={styles.inTextTitle}>Count</Text>
            <Text style={styles.inText}>There were {episode.planetConnection.totalCount} planets, {episode.vehicleConnection.totalCount} vehicles and {episode.speciesConnection.totalCount} species in this movie. </Text>
            <Text style={styles.inTextTitle}>Characters</Text>
            {characters.map(character => {
                colorToggle = !colorToggle
                let colorBackground = colorToggle ? "#312d05" : "#5a5737"                
                return<Character key={character.id} character={character} colorBackground={colorBackground} navigation={navigation}/> })} 
        </ScrollView>

  );
}

const styles = StyleSheet.create({
    boxOne: {
        flex: 1, // 5:6
        display: "flex",
        height: '15%' ,
        flexDirection: "column",
        justifyContent: "center",
        fontSize: 18
      },
  container: {
    flex: 1, // 1:3
    justifyContent: 'center',
  },
  inTextTitle:{
    color: "#d9c615",fontSize: 24, marginLeft: "5%", fontWeight:"700", marginTop:"5%" , marginBottom: "3%"
    },
  inText:{color: "#c7c700",fontSize: 16,marginLeft: "5%", width: "90%"}
});
