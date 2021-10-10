import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Icon from 'react-native-ionicons';
import Episodes from '../screens/Home/Episodes';
import LikedCharacters from '../screens/Home/LikedCharacters';

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions:{
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-home" color={tintColor} size={25} />
            )
        }
    },
    Episodes: {
        screen: Episodes,
        navigationOptions:{
            tabBarLabel: 'Episodes',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-filmstrip" color={tintColor} size={25} />
            )
        }
    },
    LikedCharacters: {
        screen: LikedCharacters,
        navigationOptions:{
            tabBarLabel: 'Characters',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-heart" color={tintColor} size={25} />
            )
        }
    },

});

export default TabNavigator