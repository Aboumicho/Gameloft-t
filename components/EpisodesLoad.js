import Episode from "./Episode"
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
export const EpisodesLoad = ({loading, data, error, order}) => {
    if(data){
        let yellow= order ? "#d9c615" : "#2d2804"
        let brown= order?  "#2d2804" : "#d9c615" 
        let isbrown = false
        let films = data.allFilms.films
        
        let movies = order ? films.slice().sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate)) : films.slice().sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
        
        let episodes = movies.map((film)=> 
        {   
            
            let color = isbrown ? brown : yellow
            let textColor = isbrown? yellow: brown
            isbrown = !isbrown
            return <Episode episode={film} key={film.episodeID} color={color} textColor={textColor} />
            
        }
        )
        
        return episodes
    
    }
    else if(loading){
        return <Text>Loading</Text>
    }
    else if(error){
        return <Text>Error</Text>
    }
}