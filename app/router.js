import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import UserPage from './screens/UserPage';
import Map from './screens/Map';
import LocationPage from './screens/EventPage';
import SearchPage from './screens/SearchPage';
import SplashScreen from 'react-native-splash-screen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';


const EventStack = createStackNavigator();

export function EventStackNavigator(){
  return(
    <EventStack.Navigator>
      {console.log("hi")}
      <EventStack.Screen name = 'Map' component = {Map}/>
      <EventStack.Screen name='EventPage' component={LocationPage} />
    </EventStack.Navigator>
  )
}

function MapScreen() {
    return (
      <Map/>
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
                name="Splash"
                component={SearchPage}
                options={{
                tabBarLabel: 'Search page',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="magnify" color={color} size={size} />
                ),
                }}
            />
        <Tab.Screen
                name="Map"
                component={Map}
                options={{
                tabBarLabel: 'Map',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="map-marker-radius" color={color} size={size} />
                ),
                }}
            />
        <Tab.Screen
                name="EventPage"
                component={LocationPage}
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