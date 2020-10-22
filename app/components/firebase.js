  
import React, { Component } from 'react';
import { Text } from 'react-native';
const firebase = require("firebase");

firebase.initializeApp({
    apiKey: "AIzaSyAyLXoloras4WyizpQY_ldCYoj452wqdPo",
    authDomain: "when-am-i-89851.firebaseapp.com",
    databaseURL: "https://when-am-i-89851.firebaseio.com",
    projectId: "when-am-i-89851",
    storageBucket: "when-am-i-89851.appspot.com",
    messagingSenderId: "1071509202117",
    appId: "1:1071509202117:web:ff52b7cb118da6a927fcac",
    measurementId: "G-D752GTYPN7"
});
  
var db = firebase.database();

export function queryCoord(northCoord, eastCoord, radius, ref) {
    db.ref('/').once('value').then((snapshot) => {
        snapshot.forEach((snap) => {
            var obj = snap.val();
            var north = obj.utm_north;  // Marker's coordinates
            var east = obj.utm_east;

            // If marker is in the search radius, add its name to the list, -1 to search all
            if(radius==-1 || (Math.abs(eastCoord-east) <= radius && Math.abs(northCoord-north) <= radius)) { 
                ref.setState({ list: {...obj} });
            }
        });
    });
}

export default class RealtimeMarker extends Component {
    state = {
        list: {}
    }

    componentDidMount() {
        queryCoord(3366465, 563099, 1000, this);   // utm east/north coord to search and radius from that coord
    }
    
    render() {
        return(
        <>
            {console.log(this.state.list.utm_east)}
        </>
        );
    }
} 