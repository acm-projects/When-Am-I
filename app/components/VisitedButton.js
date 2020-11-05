import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight, ScrollView, Platform } from 'react-native';

const PrevioslyVisited = () => {
    return(
        <TouchableHighlight style={styles.button}>
        <View style={styles.column}>
          <Text style={styles.buttonSiteText}> Name of Historical Site </Text>
          <Text style={styles.buttonInfoText}> The City, Texas </Text>
        </View>
      </TouchableHighlight>
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
    button: {
      flex:1,
      margin: 10,
      padding: 10,
      borderRadius: 25,
      alignSelf: "stretch",
      alignContent: 'center',
      backgroundColor: '#CBAF87',
      shadowColor: '#000000',
    shadowOpacity: 0.4,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 4,
    },
  })

export default PrevioslyVisited;