
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight, ScrollView, Platform, Button, PermissionsAndroid } from 'react-native';
import UserPage from './app/screens/UserPage';
import Map from './app/screens/Map';
import MyTabs from './app/router';
import SplashScreen from 'react-native-splash-screen'
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
      <MyTabs/>
  );
};
