import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRegistry } from 'react-native';

import Home from './screens/Home/Home';
import Router from './Router/Router';
import {client} from './graphql/ClientGraphql';
import { ApolloProvider } from "@apollo/client";


export default function App() {
  return (
    <ApolloProvider client={client}>
  <Router />
  </ApolloProvider>
  );
}

AppRegistry.registerComponent('Gameloft-test', () => App);
