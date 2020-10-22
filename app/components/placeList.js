import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import * as firebase from 'firebase';
import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight, ScrollView, Platform } from 'react-native';
import { Firebase } from 'react-native-firebase';
import {getPlaces} from './firebase';

class Places extends Component {
    
    onPlacesLoaded = (place) => {
        console.log(placeList);
        this.setState(prevState => ({
            placeList: prevState.placeList = placeList
        }));
    }
    componentDidMount(onPlacesLoaded) {
        getPlaces()
    }
     
}