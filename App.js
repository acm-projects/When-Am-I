
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight, ScrollView, Platform } from 'react-native';
import UserPage from './app/screens/UserPage';


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
