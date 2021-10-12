import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import getMovies from '../../queries/movies';
import Episode from '../../components/Episode';
import { EpisodesLoad } from '../../components/EpisodesLoad';
import { Ionicons } from '@expo/vector-icons';

export default function Episodes({navigation}) {
    let { loading, error, data } = getMovies()
    let [order, setOrder]=useState(false)
    let color = "#d9c615"
   
    if(order){
        color = "#2d2804"
    }else{
        color="#d9c615"
    }
    return (
    <View style={styles.container}>
        <View style={{height: "100%", width: "70%"}}>
            <EpisodesLoad loading={loading}  data={data} error={error} order={order} navigation={navigation}/>
        </View>
        <View style={{backgroundColor:"black", width: "5%" }}>

        </View>
        <View style={{height: "100%", width: "25%", display: "flex", flexDirection:"column",  backgroundColor:"black", }}>
            <Text style={{marginTop:"10%", marginBottom:"10%", display:"flex", flexDirection:"row", justifyContent:"center", color: "#d9c615"}}>Sort by date</Text>

        
        <TouchableOpacity style={{backgroundColor:"#d9c615" , display:"flex", flexDirection:"row", justifyContent: "center", width: "90%" }} onPress={() => setOrder(prevOrder => !prevOrder)}>
            <Ionicons
                name={!order ? "arrow-down" : "arrow-up"}
                
                size={30}
            />
        </TouchableOpacity>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      height: "100%",
    flex: 1,
    backgroundColor: '#fff',
    display:"flex",
    flexDirection: "row",
  },
  episodesList: {height: "100%", width: "80%"}
});
