
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight, ScrollView, Platform, Button } from 'react-native';
import UserPage from './app/screens/UserPage';
import Map from './app/screens/Map';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Event from './app/screens/EventPage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//const Stack = createStackNavigator();
import MyTabs from './app/router';


function MapScreen() {
  return (
    <Map/>
  )
}

function EventScreen() {
  return (
    <Event/>
  )
}


export default function App() {
  return (
    <MyTabs/>
  );
};

/*
const App = () => (

  <NavigationContainer>
    <Tab.Navigator initialRouteName="Map">
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="UserScreen" component={UserPage} />
    </Tab.Navigator>
  </NavigationContainer>
)

/*
const styles = StyleSheet.create({ 
  base: {
    flex: 1,
    backgroundColor: '#30475E',
    flexDirection: 'column',
  },
})

export default App;
*/
