
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight, ScrollView, Platform, Button } from 'react-native';
import UserPage from './app/screens/UserPage';
import Map from './app/screens/Map';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Event from './app/screens/EventPage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//const Stack = createStackNavigator();


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

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Map"
        tabBarOptions={{
          activeTintColor: '#e91e63',
        }}
      >
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{
            tabBarLabel: 'Map',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="UserPage"
          component={UserPage}
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="EventPage"
          component={EventScreen}
          options={{
            tabBarLabel: 'Event',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
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
