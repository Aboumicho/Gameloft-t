import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import getMovies from '../queries/movies';

export default function Home() {
    const { loading, error, data } = getMovies()
    
    if(data){
        console.log("DATA ", data)
    }
    else if(loading){
        return <Text>LOADING...</Text>
    }else if(error){
        console.log("Error: ", error)
    }

    return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
