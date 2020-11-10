import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight, ScrollView, Platform } from 'react-native';

const PreviouslyVisited = (props) => {
    return(
        <View style={styles.column}>
          <Text style={styles.buttonSiteText}>{props.title}</Text>
          <Text style={styles.buttonInfoText}>{props.city}</Text>
        </View>
    );
}


const styles = StyleSheet.create({ 
    buttonSiteText: {
      textAlign: 'center',
      fontSize: 25,
      color: '#30475E',
    },
    buttonInfoText:{
      textAlign: 'center',
      fontSize: 20,
      fontStyle: 'italic',
      color: '#30475E',
    },
    
  })

export default PreviouslyVisited;