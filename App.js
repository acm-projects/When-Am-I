
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight, ScrollView, Platform } from 'react-native';
import PrevioslyVisited from './src/components/VisitedButton';
import UserPage from './src/UserPage';

const {height , width} = Dimensions.get("window");

const App = () => (
  <View style = {styles.base}>
    <UserPage/>
  </View>
  
)

const styles = StyleSheet.create({ 
  base: {
    flex: 1,
    backgroundColor: '#30475E',
    flexDirection: 'column',
  },
})


export default App
