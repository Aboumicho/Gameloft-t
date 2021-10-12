import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export const Character = ({navigation, character, colorBackground}) =>{

    return(
    <TouchableOpacity key={character.id} style={{backgroundColor:colorBackground, width:"90%", marginLeft:"5%", opacity: 1}} 
    onPress={()=> navigation.navigate('Character', {
        character: character
    })}
    >
        <Text style={styles.inTextTitle}><Ionicons name="body"  color="#FFC000" size={22}/>{character.name}</Text>
        <Text style={styles.inText}><Ionicons name="pin"  color="#65000B" size={16}/> {character.homeworld.name} </Text>

    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    inTextTitle: {
        color:"#d9c615", fontSize: 20, marginTop: 20, fontWeight:"700"
    },
    inText: {
        color:"#d9c615", fontSize: 12, marginTop: 20, marginBottom: 20,fontWeight:"700"
    }
})