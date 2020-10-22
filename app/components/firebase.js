import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import * as firebase from 'firebase';
import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight, ScrollView, Platform } from 'react-native';
import { Firebase } from 'react-native-firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAyLXoloras4WyizpQY_ldCYoj452wqdPo",
    authDomain: "when-am-i-89851.firebaseapp.com",
    databaseURL: "https://when-am-i-89851.firebaseio.com",
    projectId: "when-am-i-89851",
    storageBucket: "when-am-i-89851.appspot.com",
}
firebase.initializeApp(firebaseConfig);

export function getPlaces(place){
    var placeList = [];

    var snapshot = await firebase.firestore().collection('Place').orderBy('title').get()

    snapshot.forEach((doc) => {
        placeList.push(doc.data());
    });

    place(placeList);
}