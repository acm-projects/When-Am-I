
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight, ScrollView, Platform, Button } from 'react-native';
import UserPage from './app/screens/UserPage';
import Map from './app/screens/Map';
import Event from './app/screens/EventPage';
import MyTabs from './app/router';


export default function App() {
  return (
    <MyTabs/>
  );
};
