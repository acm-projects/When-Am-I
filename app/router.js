import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import UserPage from './screens/UserPage';
import Map from './screens/Map';
import Event from './screens/EventPage';


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

export default function MyTabs() {
  return (
    <NavigationContainer>
        <Tab.Navigator
            initialRouteName="Map"
            tabBarOptions={{
                activeTintColor: '#CBAF87',
                showLabel: false,
                activeBackgroundColor: 'black',
                inactiveBackgroundColor: 'black',
            }}
            >
         <Tab.Screen 
                name="UserPage"
                component={UserPage}
                options={{
                tabBarLabel: 'User Page',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account-circle-outline" color={color} size={size} />
                ),
                }}
            />
        <Tab.Screen
                name="Map"
                component={MapScreen}
                options={{
                tabBarLabel: 'Map',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="map-marker-radius" color={color} size={size} />
                ),
                }}
            />
        <Tab.Screen
                name="EventPage"
                component={EventScreen}
                options={{
                tabBarLabel: 'Event',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="earth" color={color} size={size} />
                ),
                }}
            />
        </Tab.Navigator>
    </NavigationContainer>
  );
}
