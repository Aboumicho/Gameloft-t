import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Episode({navigation, episode, color, textColor}) {


    // console.log("COLOR ", color)
    // console.log("textcolor ", textColor)
    // console.log("episode.openingCrawl", episode.openingCrawl)
    return (
        <TouchableOpacity key={episode.episodeID}
            style={{        
                flex: 1, // 5:6
                display: "flex",
                height: '15%' ,
                width:"100%",
                backgroundColor: color,
                flexDirection: "column",
                justifyContent: "center"
                }}  
                onPress={() => navigation.navigate('Movie', {
                    episode: episode
                })}

        >   
            
                <Text style={{color: textColor,fontSize: 18, marginLeft: "5%", fontWeight:"700"}}>{episode.title}</Text>
                
                <Text style={{color: textColor,fontSize: 12,marginLeft: "5%", width: "100%", marginTop: 5}}>{episode.openingCrawl.replace(/\n/g, '').substring(0, 47)} ...</Text>
                <Text style={{color: textColor,fontSize: 10,marginLeft: "5%", fontWeight: "700", marginTop: 5}}>{episode.releaseDate}</Text>
        </TouchableOpacity>

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
  }
  
});
