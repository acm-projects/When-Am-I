import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import {
View,
Button,
} from 'react-native';
import UserPage from './screens/UserPage';
import Map from './screens/Map';
import LocationPage from './screens/EventPage';
import SearchPage from './screens/SearchPage';
import LoginPage from './screens/LoginPage';
import SplashScreen from 'react-native-splash-screen';
import {createStackNavigator} from '@react-navigation/stack'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const APPBAR_HEIGHT = Platform.select({
    ios: 44,
    android: 56,
    default: 64,
  });
  

function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage}
               options={{
                title: "",
                headerStyle: {
                    height: 0,
                },
              }}/>    
        <Stack.Screen name="Map" component={Map} 
               options={{
                title: "",
                headerStyle: {
                    height: 0,
                },
              }}/>    
        <Stack.Screen name="Details" component={LocationPage}
                options={{
                    title: "",
                    headerStyle: {
                        height: APPBAR_HEIGHT,
                        backgroundColor: '#30475E',
                    },
                    headerTitleStyle: {
                        alignSelf: 'center',
                        textAlign: 'center'
                      },
                    headerTintColor: '#F0ECE3',
                  }}/>          
      </Stack.Navigator>
    );
  }
  

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
                component={MyStack}
                options={{
                tabBarLabel: 'Map',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="map-marker-radius" color={color} size={size} />
                ),
                }}
            />

            <Tab.Screen 
                name="Search"
                component={SearchPage}
                options={{
                tabBarLabel: 'Search page',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="magnify" color={color} size={size} />
                ),
                }}
            />
            
        </Tab.Navigator>
    </NavigationContainer>
  );

}
/*       
 <Tab.Screen
name="EventPage"
component={LocationPage}
options={{
tabBarLabel: 'Event',
tabBarIcon: ({ color, size }) => (
<MaterialCommunityIcons name="earth" color={color} size={size} />
),
}}
*/