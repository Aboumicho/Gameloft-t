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
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const store = createStore(reducers, {}, applyMiddleware(Thunk));

export default function App() {
  return (
    <Provider store={store}>
        <ApolloProvider client={client}>
            <Router />
      </ApolloProvider>
  </Provider>
  );
}

AppRegistry.registerComponent('Gameloft-test', () => App);
