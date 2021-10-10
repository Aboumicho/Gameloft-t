import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Episodes from './Episodes';
import LikedCharacters from './LikedCharacters';
import { Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
export default function Home() {

    return (
      <Tab.Navigator>
        <Tab.Screen name="Episodes" component={Episodes}         
        options={{
          tabBarLabel: 'Episodes',
          tabBarIcon: () => <Ionicons name="film" color="#333" size={24} ios="ios-film" android="md-film"  />,
        }}
        />
        <Tab.Screen name="Liked Characters" component={LikedCharacters} 
         options={{
            tabBarLabel: 'Liked Characters',
            tabBarIcon: () => <Ionicons name="heart" color="#333" size={24} ios="ios-heart" android="md-heart"  />,
          }}
        />
      </Tab.Navigator>
  );
}
