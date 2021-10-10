import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Episode({navigation, episode, color, textColor}) {


    // console.log("COLOR ", color)
    // console.log("textcolor ", textColor)
    // console.log("episode.openingCrawl", episode.openingCrawl)
    return (
        <View key={episode.episodeID}
            style={{        
                flex: 1, // 5:6
                display: "flex",
                height: '15%' ,
                width:"100%",
                backgroundColor: color,
                flexDirection: "column",
                justifyContent: "center"
                }}  
        >   
            
                <Text style={{color: textColor,fontSize: 18, marginLeft: "5%", fontWeight:"700"}}>{episode.title}</Text>
                <Text style={{color: textColor,fontSize: 14,marginLeft: "5%", fontWeight: "600"}}>{episode.releaseDate}</Text>
                <Text style={{color: textColor,fontSize: 10,marginLeft: "5%", width: "100%"}}>{episode.openingCrawl.replace(/\n/g, '').substring(0, 47)} ...</Text>

        </View>

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
