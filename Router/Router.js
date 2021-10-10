import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home/Home';
import Episodes from '../screens/Home/Episodes';
import LikedCharacters from '../screens/Home/LikedCharacters';
import Episode from '../components/Episode';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function Router() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            ></Stack.Screen>

        </Stack.Navigator>
    </NavigationContainer>
  );
}

