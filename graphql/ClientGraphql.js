import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloClient,InMemoryCache } from '@apollo/client';

export const client  = new ApolloClient({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    connectToDevTools: true,
    cache: new InMemoryCache()
  });

